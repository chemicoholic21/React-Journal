import mongoose from "mongoose";

const eraSchema = new mongoose.Schema(
  {
    experience: {
      type: String,
      required: true,
    },
    reflection: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Era = mongoose.model("era", eraSchema);
