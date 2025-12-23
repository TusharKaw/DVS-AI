import { NextRequest, NextResponse } from 'next/server';
import { mockMLAs, mockSpeeches, mockSessions } from '@/data/mockData';
import { MLA, Speech, ChatResponse } from '@/types';

// Placeholder for Deepseek API integration
async function callDeepseekAPI(messages: Array<{ role: string; content: string }>) {
  // TODO: Replace with actual Deepseek API call
  // Example structure:
  // const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`
  //   },
  //   body: JSON.stringify({
  //     model: 'deepseek-chat',
  //     messages: messages,
  //     temperature: 0.7,
  //   })
  // });
  // return await response.json();

  // Mock response for now
  return {
    choices: [{
      message: {
        content: "I'm a placeholder AI assistant for the Delhi Legislative Assembly. Please integrate the Deepseek API to enable full functionality. I can help you find information about MLAs, their speeches, and assembly sessions."
      }
    }]
  };
}

function searchMLAs(query: string): MLA[] {
  const lowerQuery = query.toLowerCase();
  return mockMLAs.filter(mla => 
    mla.name.toLowerCase().includes(lowerQuery) ||
    mla.constituency.toLowerCase().includes(lowerQuery) ||
    mla.party.toLowerCase().includes(lowerQuery) ||
    mla.bio.toLowerCase().includes(lowerQuery)
  );
}

function searchSpeeches(query: string): Speech[] {
  const lowerQuery = query.toLowerCase();
  return mockSpeeches.filter(speech =>
    speech.topic.toLowerCase().includes(lowerQuery) ||
    speech.content.toLowerCase().includes(lowerQuery) ||
    speech.summary?.toLowerCase().includes(lowerQuery)
  );
}

function getContextFromQuery(query: string): string {
  const lowerQuery = query.toLowerCase();
  let context = '';

  // Search for MLA information
  const relevantMLAs = searchMLAs(query);
  if (relevantMLAs.length > 0) {
    context += '\n\nRelevant MLAs:\n';
    relevantMLAs.forEach(mla => {
      context += `- ${mla.name} (${mla.constituency}, ${mla.party}): ${mla.bio}\n`;
      if (mla.achievements.length > 0) {
        context += `  Achievements: ${mla.achievements.join(', ')}\n`;
      }
    });
  }

  // Search for speeches
  const relevantSpeeches = searchSpeeches(query);
  if (relevantSpeeches.length > 0) {
    context += '\n\nRelevant Speeches:\n';
    relevantSpeeches.forEach(speech => {
      const mla = mockMLAs.find(m => m.id === speech.mlaId);
      context += `- ${speech.topic} by ${mla?.name || 'Unknown'} on ${speech.date}: ${speech.summary || speech.content.substring(0, 200)}\n`;
    });
  }

  return context;
}

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      );
    }

    const lastMessage = messages[messages.length - 1];
    const query = lastMessage.content;

    // Get relevant context from the knowledge base
    const context = getContextFromQuery(query);

    // Prepare messages for API call with context
    const systemMessage = {
      role: 'system',
      content: `You are an AI assistant for the Delhi Legislative Assembly. You help users learn about MLAs, their work, achievements, and speeches in the assembly. Use the following context to answer questions accurately:

${context}

Answer questions about MLAs, their constituencies, parties, achievements, and speeches. Be helpful and informative.`
    };

    const apiMessages = [systemMessage, ...messages];

    // Call Deepseek API (placeholder)
    const apiResponse = await callDeepseekAPI(apiMessages);
    const assistantMessage = apiResponse.choices[0].message.content;

    // Find sources for citation
    const sources: ChatResponse['sources'] = [];
    const relevantMLAs = searchMLAs(query);
    relevantMLAs.forEach(mla => {
      sources.push({
        type: 'mla' as const,
        id: mla.id,
        title: `${mla.name} - ${mla.constituency}`
      });
    });

    const relevantSpeeches = searchSpeeches(query);
    relevantSpeeches.forEach(speech => {
      const mla = mockMLAs.find(m => m.id === speech.mlaId);
      sources.push({
        type: 'speech' as const,
        id: speech.id,
        title: `${speech.topic} by ${mla?.name || 'Unknown'}`
      });
    });

    return NextResponse.json({
      message: assistantMessage,
      sources: sources.slice(0, 5) // Limit to 5 sources
    });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

