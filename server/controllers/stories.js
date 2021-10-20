const Story = require("../models/stories");

let storiesController = {
  getAll: async (req, res, next) => {
    try {
      const data = await Story.find();

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
      const { judul, penulis, deskripsi, thumbnail } = await req.body;
      const payload = await {
        judul: judul,
        penulis: penulis,
        deskripsi: deskripsi,
        thumbnail: req.file.originalname
      };

      const newPost = await Story.create(payload);

      res.status(201).json({
        message: "Story created",
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
      const data = await Story.findById(id);

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
      const { judul, penulis, deskripsi, thumbnail } = req.body;
      const data = await Story.findByIdAndUpdate(id);

      data.judul = judul;
      data.penulis = penulis;
      data.deskripsi = deskripsi;
      data.thumbnail = thumbnail;
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
      const isExist = await Story.findById(id)

      if(!isExist){
          next({code:404,message:"Volunteer Not Found"})
          return
      }

      const deleted = await Story.findByIdAndDelete(id)

      res.status(200).json({
        message : "Story Deleted"
      })
    } catch (error) {
      next({code:500, message:"Internal Server Error"})
    }
  },
};

module.exports = storiesController;
