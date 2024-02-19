const express = require("express");
const {
  registerUser,
  loginUser,
  findUser,
  getAllUsers,
} = require("../controllers/userController");

const router = express.Router();

/**
 *
 * @desc {*} User Registration
 * @route {*} POST: /api/users/register
 * @access {*} Public
 */
router.post("/register", registerUser);

/**
 *
 * @desc {*} User Login
 * @route {*} POST: /api/users/login
 * @access {*} Public
 */
router.post("/login", loginUser);

/**
 *
 * @desc {*} Find user by Id
 * @route {*} GET: /api/users/find/:userId
 * @access {*} Protected
 */
router.get("/find/:userId", findUser);

/**
 *
 * @desc {*} Get All Users
 * @route {*} GET: /api/users
 * @access {*} Protected
 */
router.get("/", getAllUsers);

module.exports = router;
