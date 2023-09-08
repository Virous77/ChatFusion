import serverModel from "../models/serverModel.js";

export const createServer = async (req, res, next) => {
  try {
    console.log(req.body);
  } catch (error) {
    next(error);
  }
};

export const getServerUser = async (req, res, next) => {
  try {
    const serverUser = await serverModel.findOne({
      profileId: req.params.id,
    });

    if (!serverUser)
      return res.status(400).json({ data: serverUser, status: false });
    res.status(400).json({ data: serverUser, status: true });
  } catch (error) {
    next(error);
  }
};
