import { Journal } from "../../models/journal.model.js";
import ApiResponse from "../../utils/ApiResponse.js";

const readJournals = async (req, res) => {
  try {
    const journals = await Journal.find({ createdBy: req.user._id });

    res
      .status(201)
      .send(new ApiResponse(200, journals, "Journals fetched successfully."));
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(new ApiResponse(500, error, "Failed to fetch journals."));
  }
};

export default readJournals;
