import mongoose from "mongoose";

const MemberSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
      enum: ["admin", "moderator", "guest"],
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

export default mongoose.model("members", MemberSchema);
