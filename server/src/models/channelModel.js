import mongoose from "mongoose";

const ChannelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["text", "audio", "video"],
    },
    profileId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    serverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "servers",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("channels", ChannelSchema);
