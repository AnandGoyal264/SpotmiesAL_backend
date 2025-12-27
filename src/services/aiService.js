import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export const getAISuggestion = async (query) => {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "user",
          content: `Suggest best coding approach or snippet for: ${query}`
        }
      ]
    });

    return response.choices[0].message.content;
  } catch (err) {
    return "AI suggestion unavailable currently.";
  }
};
