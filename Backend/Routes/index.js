const router = require("express").Router();
const { login, createUser } = require("../Controllers/users");
const { NotFoundError } = require("../utils/errors");
const material = require("./material");
const userRouter = require("./users");
const {
  validateUserBody,
  validateAuthentication,
} = require("../Middlewares/validation");

router.use("/users", userRouter);
router.use("/materials", material);
router.post("/signin", validateAuthentication, login);
router.post("/signup", validateUserBody, createUser);

router.use(() => {
  throw new NotFoundError("Router not found");
});

module.exports = router;
