const express = require("express");
const router = express.Router();
const upload = require("../../middlewares/file")

const {isAuth} = require("../../middlewares/auth.middleware");


const {
  getAllCharacters,
  getCharacterByID,
  createCharacter,
} = require("../controllers/characters.controllers");

router.get("/", getAllCharacters);
router.get("/:id", getCharacterByID);
router.post("/", [isAuth], upload.single("picture") ,createCharacter);

module.exports = router;
