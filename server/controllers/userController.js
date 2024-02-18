const validator = require("validator");
const asyncHandler = require("express-async-handler");

const userModel = require("../models/userModel");
const { getHashedPassword } = require("../helpers/bcryptHelper");
const { generateResponseBody } = require("../helpers/utils");

/**
 *
 * @desc {*} User Registration
 * @route {*} POST: /api/users/register
 * @access {*} Public
 */
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Validation
  if (!email || !password || !name) {
    res.status(400);
    throw new Error("Invalid form submission");
  }

  if (!validator.isEmail(email)) {
    res.status(400);
    throw new Error("Invalid email");
  }

  // if (!validator.isStrongPassword(password)) {
  //   res.status(400);
  //   throw new Error("Enter a strong password");
  // }

  // User Registration
  try {
    const userExists = await userModel.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    const hashedPassword = await getHashedPassword(password);

    const newUser = new userModel({
      name,
      email,
      hasPremiumAccess: false,
      password: hashedPassword,
    });

    const addedUser = await newUser.save();
    if (addedUser) {
      res
        .status(200)
        .json(generateResponseBody("success", 200, "User added successfully"));
    } else {
      res
        .status(500)
        .json(generateResponseBody("error", 500, "Something went wrong"));
    }
  } catch (err) {
    res.status(500);
    throw new Error(err);
  }
});

/**
 *
 * @desc {*} User Login
 * @route {*} POST: /api/users/login
 * @access {*} Public
 */
const loginUser = asyncHandler(async (req, res) => {});

/**
 *
 * @desc {*} Change Account Password
 * @route {*} POST: /api/users/reset-password
 * @access {*} Protected
 */
const changePassword = asyncHandler(async (req, res) => {});

/**
 *
 * @desc {*} Change Premium access
 * @route {*} POST: /api/users/premium-access
 * @access {*} Protected
 */
const changePremiumAccess = asyncHandler(async (req, res) => {});

/**
 *
 * @desc {*} Delete account
 * @route {*} POST: /api/users/delete-account
 * @access {*} Protected
 */
const deleteAccount = asyncHandler(async (req, res) => {});

module.exports = { registerUser };
