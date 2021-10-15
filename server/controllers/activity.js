const Activity = require("../models/activity");

let activityController = {
  getAll: async (req, res,next) => {
    try {
      const data = await Activity.find();

      res.status(200).json({
        message: "success",
        data: data,
      });
    } catch (error) {
      next({code:500,message:error.message})
    }
  },

  createData: async (req, res,next) => {
    try {
      const { nama_kegiatan,deskripsi } = req.body;
      const payload = {
        thumbnail: req.file.originalname,
        nama_kegiatan: nama_kegiatan,
        deskripsi: deskripsi,
      };

      const newPost = await Activity.create(payload);

      res.status(201).json({
        message: "Activity created",
        data: payload,
      });
    } catch (error) {
      next({code:500,message:error.message})
    }
  },

  getById: async (req, res,next) => {
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

  updateById: async (req, res,next) => {
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

  deleteById: async (req, res,next) => {
    try {
      const { id } = req.params;
      const isExist = await Activity.findById(id)

      if(!isExist){
          next({code:404,message:"Activity Not Found"})
          return
      }

      const deleted = await Activity.findByIdAndDelete(id)
      res.status(200).json({
        message: "success",
      });
    } catch (error) {
      next
    }
  },
};

module.exports = activityController;
