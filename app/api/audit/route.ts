export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { url } = body

    if (!url || typeof url !== 'string') {
      return Response.json({ error: 'Missing or invalid url' }, { status: 400 })
    }

    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      return Response.json(
        { error: 'ANTHROPIC_API_KEY is not set' },
        { status: 500 }
      )
    }

    const systemPrompt =
      'You are a website conversion and AI-readiness expert working for Softgrama, an AI-powered web studio. Analyze the website at the given URL and return ONLY a valid JSON object with this exact structure: { "categories": [ { "name": "Messaging clarity", "score": 0-10, "findings": ["finding 1", "finding 2"] }, { "name": "Conversion readiness", "score": 0-10, "findings": ["finding 1", "finding 2"] }, { "name": "AI readiness", "score": 0-10, "findings": ["finding 1", "finding 2"] }, { "name": "SEO & performance", "score": 0-10, "findings": ["finding 1", "finding 2"] } ], "opportunities": [ { "title": "Short title", "description": "One sentence." }, { "title": "Short title", "description": "One sentence." }, { "title": "Short title", "description": "One sentence." } ] }'

    const anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: systemPrompt,
        messages: [
          {
            role: 'user',
            content: `Analyze the website at this URL: ${url}`,
          },
        ],
      }),
    })

    if (!anthropicResponse.ok) {
      const errorText = await anthropicResponse.text()
      return Response.json(
        { error: 'Anthropic API error', details: errorText },
        { status: anthropicResponse.status }
      )
    }

    const data = await anthropicResponse.json()
    const content = data.content?.[0]?.text

    if (!content) {
      return Response.json(
        { error: 'No content returned from Claude' },
        { status: 500 }
      )
    }

    // Extract JSON from possible markdown code fences
    const jsonMatch = content.match(/```json\s*([\s\S]*?)\s*```/) ||
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
