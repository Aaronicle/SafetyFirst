const router = require("express").Router();
const { validateMaterial, validateId } = require("../Middlewares/validation");

const {
  createMaterial,
  getMaterials,
  deleteMaterial,
} = require("../Controllers/material");
const authMiddleware = require("../Middlewares/auth");

router.post("/", authMiddleware, validateMaterial, createMaterial);

router.get("/", getMaterials);

router.delete("/:itemId", authMiddleware, validateId, deleteMaterial);

module.exports = router;
