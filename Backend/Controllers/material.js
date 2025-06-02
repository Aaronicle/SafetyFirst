const material = require("../Models/material");

const {
  BadRequestError,
  NotFoundError,
  ForbiddenError,
} = require("../utils/errors");

const createMaterial = (req, res, next) => {
  const owner = req.user._id;

  const {
    rn,
    name,
    health,
    flammability,
    physical,
    ppe,
    requiredPPE,
    molecularFormula,
    experimentalProperties,
    synonyms,
  } = req.body;

  material
    .create({
      rn,
      name,
      health,
      flammability,
      physical,
      ppe,
      requiredPPE,
      molecularFormula,
      owner,
      experimentalProperties,
      synonyms,
    })
    .then((item) => {
      res.status(201).send({ data: item });
    })
    .catch((err) => {
      if (err.name === "ValidationError") {
        next(new BadRequestError("Invalid data provided"));
      } else {
        next(err);
      }
    });
};

const getMaterials = (req, res, next) => {
  material
    .find({})
    .then((items) => res.status(200).send(items))
    .catch((err) => {
      console.error(err);
      next(err);
    });
};

const deleteMaterial = (req, res, next) => {
  const { itemId } = req.params;

  material
    .findById(itemId)
    .orFail()
    .then((item) => {
      if (String(item.owner) !== req.user._id) {
        return next(
          new ForbiddenError("You don't have permission to delete this item")
        );
      }
      return material.deleteOne(item).then((deletedItem) => {
        res.send(deletedItem);
      });
    })
    .catch((err) => {
      if (err.name === "DocumentNotFoundError") {
        next(new NotFoundError("Item not found"));
      } else if (err.name === "CastError") {
        next(new BadRequestError("Invalid item ID"));
      } else {
        next(err);
      }
    });
};

module.exports = {
  createMaterial,
  getMaterials,
  deleteMaterial,
};
