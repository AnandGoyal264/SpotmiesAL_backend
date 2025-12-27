import axios from "axios";

export const getAISuggestion = async (query) => {
  try {
    if (!process.env.GEMINI_API_KEY) return "AI not configured";

    const url =
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const response = await axios.post(url, {
      contents: [
        {
          parts: [
            {
              text: `Suggest best coding approach or code snippet for: ${query}`
            }
          ]
        }
      ]
    });

    return response.data.candidates[0].content.parts[0].text;
  } catch (err) {
    console.log("GEMINI ERROR:", err?.response?.data || err.message);
    return "AI suggestion unavailable currently.";
  }
};
