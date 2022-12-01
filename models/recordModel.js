import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
  score: { type: Number, required: true },
  user_id: { type: mongoose.Types.ObjectId, ref: "User" },
});

const record = mongoose.model("Record", recordSchema);
export default record;
