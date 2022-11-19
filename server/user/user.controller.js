const userModel = require("./user.model");

class UserController {
  getAllUser(request, respond) {
    userModel.find((error, user) => {
      if (error) {
        console.log(error);
      }

      respond.status(200).json({
        success: true,
        message: "Done!",
        users: user,
      });
    });
  }

  login(req, res) {
    let check = userModel.findOne(
      { fullname: req.body.fullname },
      (err, user) => {
        console.log(user);
        if (!user) {
          res.status(200).json({
            success: true,
            message: "Fail!",
          });
        } else {
          console.log(req.body.fullname);
          res.status(200).json({
            success: true,
            message: "Done!",
            user: user,
          });
        }
      }
    );
  }

  async register(req, res) {
    try {
      const newUser = new userModel({
        ...req.body,
        channel: req.body.fullname,
      });
      await newUser.save();
      res.send({ success: true, user: newUser });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new UserController();
