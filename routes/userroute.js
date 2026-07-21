const { handlesignin, handlesignup ,handlelogout ,handlegetOtherUsers } = require("../controllers/usercontroller");

const { Router } = require("express");
const router = Router();
const isAuthenticated = require("../middlewares/isauthenticated");

// Page routes

router.get("/signin", (req, res) => {
  return res.render("signin");
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

// API routes
router.post("/signup", handlesignup);
router.post("/signin", handlesignin);
router.get("/logout", handlelogout);
router.get("/getusers", isAuthenticated, handlegetOtherUsers);

module.exports = router;