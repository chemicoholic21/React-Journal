import mongoose from "mongoose";
import { Journal } from "../../models/journal.model.js";
import ApiResponse from "../../utils/ApiResponse.js";
import { Era } from "../../models/era.model.js";

const getStatistics = async (req, res) => {
  try {
    const data = await Journal.aggregate([
      {
        $match: {
          createdBy: new mongoose.Types.ObjectId(req.user._id),
        },
      },
      {
        $group: {
          _id: null,
          averageMood: {
            $avg: "$mood",
          },
          total: {
            $sum: 1,
          },
        },
      },
    ]);

    const eraEntries = await Era.countDocuments({ createdBy: req.user._id });

    const payload = {
      averageMood: data?.[0]?.averageMood + "/5",
      totalEntries: data?.[0]?.total + eraEntries,
    };

    res
      .status(200)
      .send(new ApiResponse(200, payload, "Stats fetched successfully."));
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(new ApiResponse(500, error, "Failed to fetch statistics"));
  }
};

export { getStatistics };
