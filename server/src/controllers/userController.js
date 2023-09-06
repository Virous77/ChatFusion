import userModel from "../models/userModel.js";

export const createUser = async (req, res, next) => {
  try {
    res.status(200).json({ message: "cool" });
  } catch (error) {
    next(error);
  }
};
