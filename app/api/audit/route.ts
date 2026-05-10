export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { url } = body

    if (!url || typeof url !== 'string') {
      return Response.json({ error: 'Missing or invalid url' }, { status: 400 })
    }

    const apiKey = process.env.GROQ_API_KEY
    if (!apiKey) {
      return Response.json(
        { error: 'GROQ_API_KEY is not set' },
        { status: 500 }
      )
    }

    const systemPrompt =
      'You are a website conversion and AI-readiness expert working for Softgrama, an AI-powered web studio. Analyze the website at the given URL and return ONLY a valid JSON object with this exact structure: { "categories": [ { "name": "Messaging clarity", "score": 0-10, "findings": ["finding 1", "finding 2"] }, { "name": "Conversion readiness", "score": 0-10, "findings": ["finding 1", "finding 2"] }, { "name": "AI readiness", "score": 0-10, "findings": ["finding 1", "finding 2"] }, { "name": "SEO & performance", "score": 0-10, "findings": ["finding 1", "finding 2"] } ], "opportunities": [ { "title": "Short title", "description": "One sentence." }, { "title": "Short title", "description": "One sentence." }, { "title": "Short title", "description": "One sentence." } ] }'

    const groqResponse = await fetch(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            {
              role: 'system',
              content: systemPrompt,
            },
            {
              role: 'user',
              content: `Audit this website and return the JSON report: ${url}`,
            },
          ],
          max_tokens: 1000,
        }),
      }
    )

    if (!groqResponse.ok) {
      const errorText = await groqResponse.text()
      return Response.json(
        { error: 'Groq API error', details: errorText },
        { status: groqResponse.status }
      )
    }

    const data = await groqResponse.json()
    const content = data.choices?.[0]?.message?.content

    if (!content) {
      return Response.json(
        { error: 'No content returned from Groq' },
        { status: 500 }
      )
    }

    // Extract JSON from possible markdown code fences
    const jsonMatch =
      content.match(/```json\s*([\s\S]*?)\s*```/) ||
      content.match(/```\s*([\s\S]*?)\s*```/) ||
      [null, content]
    const jsonString = jsonMatch[1].trim()

    const parsed = JSON.parse(jsonString)
    return Response.json(parsed)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return Response.json({ error: message }, { status: 500 })
  }
}