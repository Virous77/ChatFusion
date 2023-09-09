import channelModel from "../models/channelModel.js";

export const createChannel = async (data) => {
  try {
    const channel = new channelModel(data);
    await channel.save();

    return channel;
  } catch (error) {
    return error;
  }
};
