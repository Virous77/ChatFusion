import joi from "joi";

export const UserValidate = async (req, res, next) => {
  try {
    const schema = joi
      .object({
        name: joi.string().trim().required(),
        email: joi.string().trim().required(),
        userId: joi.string().trim().required(),
      })
      .options({ stripUnknown: true });

    const result = await schema.validateAsync(req.body);
    if (result) {
      next();
    }
  } catch (error) {
    next(error);
  }
};

export const ServerValidate = async (req, res, next) => {
  try {
    const schema = joi
      .object({
        name: joi.string().trim().required(),
        email: joi.string().trim().required(),
        userAuthId: joi.string().trim().required(),
        imageUrl: joi.string().trim().required(),
      })
      .options({ stripUnknown: true });

    const result = await schema.validateAsync(req.body);
    if (result) {
      next();
    }
  } catch (error) {
    next(error);
  }
};
