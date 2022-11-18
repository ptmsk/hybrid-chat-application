const  webFramework = require("express");
const router = webFramework.Router();

const UserController = require("./user.controller");

router.get("/", UserController.getAllUser);
router.post("/login", UserController.login);

module.exports = router;