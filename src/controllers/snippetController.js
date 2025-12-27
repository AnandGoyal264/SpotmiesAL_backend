import Snippet from "../models/Snippet.js";
import { getAISuggestion } from "../services/aiService.js";

export const searchSnippets = async (req, res) => {
  try {
    const query = req.query.q;

    const results = await Snippet.find(
      { $text: { $search: query } },
      { score: { $meta: "textScore" } }
    ).sort({ score: { $meta: "textScore" } });

    const aiSuggestion = await getAISuggestion(query);

    res.json({
      success: true,
      count: results.length,
      results,
      aiSuggestion
    });
  } catch (err) {
    res.status(500).json({ message: "Search failed", error: err });
  }
};

export const addSnippet = async (req, res) => {
  try {
    const snippet = await Snippet.create(req.body);
    res.json(snippet);
  } catch (err) {
    res.status(500).json({ message: "Failed to add snippet" });
  }
};

export const rateSnippet = async (req, res) => {
  try {
    const { rating } = req.body;
    const snippet = await Snippet.findById(req.params.id);

    snippet.rating =
      (snippet.rating * snippet.ratingsCount + rating) /
      (snippet.ratingsCount + 1);

    snippet.ratingsCount += 1;

    await snippet.save();
    res.json(snippet);
  } catch (err) {
    res.status(500).json({ message: "Rating failed" });
  }
};
