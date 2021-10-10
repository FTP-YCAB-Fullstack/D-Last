const Activity = require("../models/activity");

let activityController = {
  getAll: async (req, res, next) => {
    try {
      const data = await Activity.find();

      res.status(200).json({
        message: "success",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },

  createData: async (req, res) => {
    try {
      const { nama_kegiatan, thumbnail, deskripsi } = await req.body;
      const payload = await {
        thumbnail: thumbnail,
        nama_kegiatan: nama_kegiatan,
        deskripsi: deskripsi,
      };

      const newPost = await Activity.create(payload);

      res.status(201).json({
        message: "Activity created",
        data: payload,
      });
    } catch (error) {
      res.json({
        message: error.message,
      });
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Activity.findById(id);

      res.status(200).json({
        message: "success",
        data,
      });
    } catch (error) {
      if (!data) {
        res.status(404).json({
          message: "data not found",
          error,
        });
      }
    }
  },

  updateById: async (req, res) => {
    try {
      const { id } = req.params;
      const { nama_kegiatan, thumbnail, deskripsi } = await req.body;
      const data = await Activity.findByIdAndUpdate(id);

      data.nama_kegiatan = nama_kegiatan;
      data.thumbnail = thumbnail;
      data.deskripsi = deskripsi;
      data.save();

      res.status(200).json({
        message: "success",
        data,
      });
    } catch (error) {
      if (!data) {
        res.status(404).json({
          message: "data not found",
          error,
        });
      }
    }
  },

  deleteById: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Activity.deleteOne(id);

      data.destroy();
      res.status(200).json({
        message: "success",
      });
    } catch (error) {
      if (!data) {
        res.status(404).json({
          message: "data not found",
        });
      }
    }
  },
};

module.exports = activityController;
