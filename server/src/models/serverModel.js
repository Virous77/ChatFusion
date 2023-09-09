import mongoose from "mongoose";

const ServerSchema = new mongoose.Schema(
  {
    inviteCode: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    userAuthId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("servers", ServerSchema);
