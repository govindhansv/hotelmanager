const express = require("express");
const router = express.Router();
const adminControllers = require("../controllers/admins-controller");

// admin 
router.get('/admin/dashboard/', adminControllers.getDashboard);
router.get('/admin/', adminControllers.getSignup);
router.post("/admin/signup", adminControllers.postSignup);
router.get('/admin/signin', adminControllers.getSignin);
router.post("/admin/signin", adminControllers.postSignin);
router.get("/admin/logout", adminControllers.logOut);

module.exports = router;