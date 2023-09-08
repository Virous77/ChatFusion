import userModel from "../models/userModel.js";

export const createUser = async (req, res, next) => {
  try {
    const findUser = await userModel.findOne({ userId: req.body.userId });
    if (findUser) return res.status(200).json({ status: true, data: findUser });
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).json({ status: true, data: newUser });
  } catch (error) {
    next(error);
  }
};
