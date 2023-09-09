import serverModel from "../models/serverModel.js";
import { createChannel } from "./channelController.js";
import { createMember } from "./memberController.js";
import userModel from "../models/userModel.js";

export const createServer = async (req, res, next) => {
  try {
    const user = await userModel.findOne({ userId: req.body.userAuthId });
    const serverUser = new serverModel(req.body);
    await serverUser.save();

    const channelData = {
      type: "text",
      profileId: user._id,
      serverId: serverUser._id,
      name: "general",
    };

    const memberData = {
      role: "admin",
      profileId: user._id,
      serverId: serverUser._id,
    };
    await createMember(memberData);
    await createChannel(channelData);

    res.status(201).json({ status: true, data: serverUser });
  } catch (error) {
    next(error);
  }
};

export const getServerUser = async (req, res, next) => {
  try {
    if (req.params.type === "all") {
      const serverUser = await serverModel.find({
        userAuthId: req.params.id,
      });

      if (serverUser.length === 0)
        return res.status(400).json({ data: null, status: false });
      res.status(200).json({ data: serverUser, status: true });
    } else {
      const serverUser = await serverModel.findOne({
        userAuthId: req.params.id,
      });

      if (!serverUser)
        return res.status(400).json({ data: serverUser, status: false });
      res.status(200).json({ data: serverUser, status: true });
    }
  } catch (error) {
    next(error);
  }
};
