const express = require("express");
const router = express.Router();

const { isAuth } = require("../../middlewares/auth.middleware");

const {
  getAllSeries,
  getSerieByID,
  createSerie,
  deleteSerie
} = require("../controllers/series.controllers");

router.get("/", getAllSeries);
router.get("/:id", getSerieByID);
router.post("/", [isAuth], createSerie);
router.delete("/:id", deleteSerie)

module.exports = router;
