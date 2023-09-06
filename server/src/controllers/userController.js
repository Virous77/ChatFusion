import userModel from "../models/userModel.js";

export const createUser = async (req, res, next) => {
  try {
    console.log("cool");
  } catch (error) {
    next(error);
  }
};
