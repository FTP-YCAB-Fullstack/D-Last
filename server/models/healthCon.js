const mongoose = require("mongoose");

const healthConditionSchema = mongoose.Schema({
  judul: {
    type: String,
    required: true,
  },
  pengertian: {
    type: String,
    required: true,
  },
  ciri: {
    type: String,
    required: true,
  },
  penanggulangan: {
    type: String,
    required: true,
  },
  credit: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("healthconditions", healthConditionSchema);
