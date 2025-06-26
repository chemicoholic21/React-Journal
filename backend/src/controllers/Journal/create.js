import { Journal } from "../../models/journal.model.js";
import ApiResponse from "../../utils/ApiResponse.js";

const createJournal = async (req, res) => {
  try {
    const { title, content, tags, mood } = req.body;

    if (!title || !content || !tags || !mood) {
      return res.status(400, null, "Required fields missing.");
    }

    const createdJournal = await Journal.create({
      title,
      content,
      tags,
      mood,
      createdBy: req.user._id,
      owner: req.user.name,
    });

    res
      .status(201)
      .send(
        new ApiResponse(201, createdJournal, "Journal created successfully.")
      );
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(new ApiResponse(500, error, "Failed to create journal."));
  }
};

export default createJournal;
