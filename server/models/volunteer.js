const mongoose = require("mongoose");

const volunteerSchema = mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  ttl: {
    type: String,
    required: true,
  },
  domisili: {
    type: String,
    required: true,
  },
  pendidikan_terakhir: {
    type: String,
    required: true,
  },
  visi_misi: {
    type: String,
    required: true,
  },
  pendapat_mental_health: {
    type: String,
    required: true,
  },
  rencana_volunteer: {
    type: String,
    required: true,
  },
  pas_foto: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("volunteer", volunteerSchema);
