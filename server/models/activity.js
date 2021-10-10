const mongoose = require("mongoose");

const activitySchema = mongoose.Schema({
  nama_kegiatan: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  deskripsi: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("activity", activitySchema);
