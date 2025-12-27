import User from "../models/User.js";

export const addFavorite = async (req, res) => {
  try {
    const { userId, snippetId } = req.params;

    const user = await User.findById(userId);
    user.favorites.push(snippetId);
    await user.save();

    res.json({ success: true, favorites: user.favorites });
  } catch (err) {
    res.status(500).json({ message: "Failed to add favorite" });
  }
};

export const getFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate("favorites");
    res.json(user.favorites);
  } catch (err) {
    res.status(500).json({ message: "Cannot fetch favorites" });
  }
};
