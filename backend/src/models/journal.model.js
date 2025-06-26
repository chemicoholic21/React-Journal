import mongoose from "mongoose";

const journalSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    mood: {
      type: Number,
      required: true,
    },
    tags: {
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

export const Journal = mongoose.model("journal", journalSchema);
