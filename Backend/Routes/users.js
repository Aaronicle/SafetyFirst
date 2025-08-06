const router = require("express").Router();
const { getCurrentUser, updateCurrentUser } = require("../Controllers/users");
const authMiddleware = require("../Middlewares/auth");
const { validateUserUpdate } = require("../Middlewares/validation");

router.get("/me", authMiddleware, getCurrentUser);
router.patch("/me", authMiddleware, validateUserUpdate, updateCurrentUser);

module.exports = router;
