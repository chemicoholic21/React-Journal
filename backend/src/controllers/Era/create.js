import { Era } from "../../models/era.model.js";
import ApiResponse from "../../utils/ApiResponse.js";

const createEra = async (req, res) => {
  try {
    const { experience, reflection, action } = req.body;

    if (!experience || !reflection || !action) {
      return res
        .status(400)
        .send(new ApiResponse(400, null, "Required fields missing."));
    }

    const createdEra = await Era.create({
      experience,
      reflection,
      action,
      createdBy: req.user._id,
      owner: req.user.name,
    });

    res
      .status(201)
      .send(new ApiResponse(201, createdEra, "Entry created successfully."));
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(new ApiResponse(500, error, "Failed to create entry."));
  }
};

export default createEra;
