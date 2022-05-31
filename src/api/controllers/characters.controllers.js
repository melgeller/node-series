const Character = require("../models/characters.models");

const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

const getAllCharacters = async (req, res, next) => {
  try {
    const allCharacters = await Character.find();
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      character: allCharacters,
    });
  } catch (error) {
    return next(error);
  }
};

const getCharacterByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const characterByID = await Character.findById(id);
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      character: characterByID,
    });
  } catch (error) {
    return next(error);
  }
};

const createCharacter = async (req, res, next) => {
  try {
    const newCharacter = new Character(req.body);
    console.log(req.body);
    if (req.file) {
        newCharacter.picture = req.file.path;
      }
    const createdCharacter = newCharacter.save();
    return res.json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      createdCharacter: createdCharacter,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = { getAllCharacters, getCharacterByID, createCharacter };
