import memberModel from "../models/memberModel.js";

export const createMember = async (data) => {
  try {
    const member = new memberModel(data);
    await member.save();

    return member;
  } catch (error) {
    return error;
  }
};
