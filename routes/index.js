var express = require("express");
var router = express.Router();
var User = require("../models/user");
var passport = require("passport");

// Root route
router.get("/", function(req, res){
   res.render("landing"); 
});

// show register form
router.get("/register", function(req, res) {
   res.render("register"); 
});

// handle sign up logic
router.post("/register", function(req, res) {
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
      if(err){
          req.flash("error", err.message);
          return res.redirect("/register");
      } 
      passport.authenticate("local")(req, res, function() {
          req.flash("success", "Welcomde to YelpCamp " + user.username ); 
          res.redirect("/campgrounds");
      });
    });
});

// login form route
router.get("/login", function(req, res) {
   res.render("login"); 
});

// login logic
router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function(req, res) {
});

// logout logic
router.get("/logout", function(req, res) {
    req.logout();
    req.flash("success", "LOGGED YOU OUT");
    res.redirect("/campgrounds");
});

module.exports = router;