import serverModel from "../models/serverModel.js";

export const createServer = async (req, res, next) => {
  try {
    const serverUser = new serverModel(req.body);
    await serverUser.save();

    res.status(201).json({ status: true, data: serverUser });
  } catch (error) {
    next(error);
  }
};

export const getServerUser = async (req, res, next) => {
  try {
    const serverUser = await serverModel.findOne({
      userAuthId: req.params.id,
    });

    if (!serverUser)
      return res.status(400).json({ data: serverUser, status: false });
    res.status(400).json({ data: serverUser, status: true });
  } catch (error) {
    next(error);
  }
};
