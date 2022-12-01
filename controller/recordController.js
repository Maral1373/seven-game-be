import Record from "../models/recordModel.js";

export const allRecord = async (req, res, next) => {
  try {
    const findRecord = await Record.find({}).populate("user_id");
    res.json(findRecord);
  } catch (error) {
    next(error);
  }
};

export const postRecord = async (req, res, next) => {
  try {
    const newRecord = await Record.create(req.body);
    res.json(newRecord);
  } catch (error) {
    next(error);
  }
};

export const findRecordId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const findRecord = await Record.findById(id);
    res.json(findRecord);
  } catch (error) {
    next(error);
  }
};
