const  webFramework = require("express");
const router = webFramework.Router();

const UserController = require("./user.controller");

router.get("/", UserController.getAllUser);
router.post("/login", UserController.login);
router.post("/register", UserController.register);

module.exports = router;