const userController = {};
const passport = require("passport");
const User = require("../models/User");

userController.renderSignUpForm = (req, res) => {
  res.render("users/signUp");
};

userController.signUp = async (req, res) => {
  const errors = [];
  const { name, email, password, confirmPassword } = req.body;
  if (password != confirmPassword) {
    errors.push({ text: "Passwords do not match." });
  }
  if (password.length < 6) {
    errors.push({ text: "Password must be a least 6 characters." });
  }
  if (errors.length > 0) {
    res.render("users/signUp", {
      errors,
      name,
      email,
      password,
      confirmPassword,
    });
  } else {
    const emailUser = await User.findOne({ email: email });
    if (emailUser) {
      errors.push({ text: "The email is already in use." });
      // req.flash('error_msg', 'the email is already in use.');
      res.render("users/signUp", {
        errors,
        name,
        email,
        password,
        confirmPassword,
      });
    } else {
      const newUser = new User({ name, email, password });
      newUser.password = await newUser.encryptPassword(password);

      await newUser.save();
      req.flash("success_msg", "You ar now registered.");
      res.redirect("/user/login");
    }
  }
};

userController.matchPassWord = async (password) => {
  return await bcrypt.compare(password, User.password);
};

userController.renderLoginForm = (req, res) => {
  res.render("users/login");
};

userController.login = passport.authenticate("local", {
  failureRedirect: "/user/login",
  successRedirect: "/notes",
  failureFlash: true,
});

userController.logout = (req, res) => {
  req.logout();
  res.redirect('/user/login')
};

module.exports = userController;
