import mongoose from "mongoose";

const ServerSchema = new mongoose.Schema(
  {
    inviteCode: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    profileId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("servers", ServerSchema);
