import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { text } = await request.json();

    if (!text) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }

    // Simulate AI processing delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Mock logic for Grammar Correction
    // Real implementation would pass this text to an LLM like Gemini
    let correctedText = text;
    let explanation = '';
    let isError = false;
    let cefrLevel = 'A1';

    const lowerText = text.toLowerCase();

    // Mock grammar rules
    if (lowerText.includes('i has')) {
      correctedText = text.replace(/I has/gi, 'I have');
      explanation = 'Use "have" with the pronoun "I", not "has".';
      isError = true;
    } else if (lowerText.includes('he do')) {
      correctedText = text.replace(/he do/gi, 'he does');
      explanation = 'Use "does" with third-person singular pronouns like "he", "she", or "it".';
      isError = true;
    } else if (lowerText.includes('she have')) {
      correctedText = text.replace(/she have/gi, 'she has');
      explanation = 'Use "has" with third-person singular pronouns.';
      isError = true;
    } else if (lowerText.includes('gooder')) {
      correctedText = text.replace(/gooder/gi, 'better');
      explanation = 'The comparative form of "good" is "better", not "gooder".';
      isError = true;
    } else if (lowerText.length > 30) {
      // Just for variety
      cefrLevel = 'B1';
    }

    if (!isError) {
      explanation = 'Great pronunciation and grammar!';
    }

    return NextResponse.json({
      originalText: text,
      correctedText: isError ? correctedText : null, // null means no correction needed
      explanation,
      CEFR_Level: cefrLevel,
      isError
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
