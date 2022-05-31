const Serie = require("../models/series.models");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

const getAllSeries = async (req, res, next) => {
  try {
    const allSeries = await Serie.find().populate("characters");
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      series: allSeries,
    });
  } catch (error) {
    return next(error);
  }
};

const getSerieByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const serieByID = await Serie.findById(id).populate("characters");
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      serie: serieByID,
    });
  } catch (error) {
    return next(error);
  }
};

const createSerie = async (req, res, next) => {
  try {
    const newSerie = new Serie(req.body);
    const createdSerie = newSerie.save();
    return res.json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      createdSerie: newSerie,
    });
  } catch (error) {
    return next(error);
  }
};

const deleteSerie = async (req, res) => {
  try {
    const { id } = req.params;
    const serieBorrado = await Serie.findByIdAndDelete(id);
    return res.status(200).json(serieBorrado)

  } catch (error) {
    return res.status(500).json(error)
  }
}

module.exports = { getAllSeries, getSerieByID, createSerie, deleteSerie };