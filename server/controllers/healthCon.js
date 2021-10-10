const Healthy = require("../models/healthCon");

let healthyController = {
  getAll: async (req, res, next) => {
    try {
      const data = await Healthy.find();

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
      const { judul, pengertian, ciri, credit, penanggulangan } =
        await req.body;
      const payload = await {
        judul: judul,
        pengertian: pengertian,
        ciri: ciri,
        credit: credit,
        penanggulangan: penanggulangan,
      };

      const newPost = await Healthy.create(payload);

      res.status(201).json({
        message: "user created",
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
      const data = await Healthy.findById(id);

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
      const { judul, pengertian, ciri, credit, penanggulangan } = req.body;
      const data = await Healthy.findByIdAndUpdate(id);

      data.judul = judul;
      data.pengertian = pengertian;
      data.ciri = ciri;
      data.credit = credit;
      data.penanggulangan = penanggulangan;
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
      const data = await Healthy.deleteOne(id);

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

module.exports = healthyController;
