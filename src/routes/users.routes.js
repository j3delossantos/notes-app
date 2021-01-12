const { Router } = require("express");
const userController = require("../controllers/users.controllers");

const router = Router();

router.get("/user/signup", userController.renderSignUpForm);

router.post("/user/signup", userController.signUp);

router.get("/user/login", userController.renderLoginForm);

router.post("/user/login", userController.login);

router.get("/user/logout", userController.logout);

module.exports = router;
