export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { url } = body

    if (!url || typeof url !== 'string') {
      return Response.json({ error: 'Missing or invalid url' }, { status: 400 })
    }

    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return Response.json(
        { error: 'GEMINI_API_KEY is not set' },
        { status: 500 }
      )
    }

    const systemPrompt =
      'You are a website conversion and AI-readiness expert working for Softgrama, an AI-powered web studio. Analyze the website at the given URL and return ONLY a valid JSON object with this exact structure: { "categories": [ { "name": "Messaging clarity", "score": 0-10, "findings": ["finding 1", "finding 2"] }, { "name": "Conversion readiness", "score": 0-10, "findings": ["finding 1", "finding 2"] }, { "name": "AI readiness", "score": 0-10, "findings": ["finding 1", "finding 2"] }, { "name": "SEO & performance", "score": 0-10, "findings": ["finding 1", "finding 2"] } ], "opportunities": [ { "title": "Short title", "description": "One sentence." }, { "title": "Short title", "description": "One sentence." }, { "title": "Short title", "description": "One sentence." } ] }'

    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [
              {
                text: systemPrompt,
              },
            ],
          },
          contents: [
            {
              parts: [
                {
                  text: `Analyze the website at this URL: ${url}`,
                },
              ],
            },
          ],
        }),
      }
    )

    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text()
      return Response.json(
        { error: 'Gemini API error', details: errorText },
        { status: geminiResponse.status }
      )
    }

    const data = await geminiResponse.json()
    const content = data.candidates?.[0]?.content?.parts?.[0]?.text

    if (!content) {
      return Response.json(
        { error: 'No content returned from Gemini' },
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