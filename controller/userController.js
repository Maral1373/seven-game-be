import User from "../models/usersModel.js";

export const allUser = async (req, res, next) => {
  try {
    const findRecord = await User.find({});
    res.json(findRecord);
  } catch (error) {
    next(error);
  }
};

export const postUser = async (req, res, next) => {
  try {
    const userId = req.body;
    const newUser = await User.create(userId);
    res.json(newUser);
  } catch (error) {
    next(error);
  }
};

export const findUserId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const findRecord = await User.findById(id);
    res.json(findRecord);
  } catch (error) {
    next(error);
  }
};
