const mongoose = require("mongoose");
const validator = require("validator");

const material = new mongoose.Schema({
  rn: { type: String, minlength: 2, maxlength: 20 },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  health: {
    type: Number,
    min: 0,
    max: 4,
    required: true,
  },
  flammability: {
    type: Number,
    min: 0,
    max: 4,
    required: true,
  },
  physical: {
    type: Number,
    min: 0,
    max: 4,
    required: true,
  },
  ppe: {
    type: String,
    enum: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "X"],
    required: true,
  },
  requiredPPE: {
    type: [String],
    default: [],
  },
  molecularFormula: {
    type: String,
    default: "",
  },
  experimentalProperties: {
    type: [Object],
    default: [],
  },
  synonyms: {
    type: [String],
    default: [],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("materials", material);
