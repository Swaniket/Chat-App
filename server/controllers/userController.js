const validator = require("validator");
const asyncHandler = require("express-async-handler");

const userModel = require("../models/userModel");
const {
  getHashedPassword,
  comparePasswords,
} = require("../helpers/bcryptHelper");
const { generateResponseBody } = require("../helpers/utils");
const { generateJWTToken } = require("../helpers/jwtHelper");

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

  if (!validator.isStrongPassword(password)) {
    res.status(400);
    throw new Error("Enter a strong password");
  }

  // User Registration
  try {
    const userExists = await userModel.findOne({ email });

    if (userExists) {
      res
        .status(400)
        .json(generateResponseBody("error", 400, "User already exists"));
    }

    const hashedPassword = await getHashedPassword(password);

    const newUser = new userModel({
      name,
      email,
      hasPremiumAccess: false,
      isVerified: false,
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
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    res.status(400);
    throw new Error("Invalid form submission");
  }

  // User Login
  try {
    const user = await userModel.findOne({ email });

    // @TODO: Embed role in the token
    if (user && (await comparePasswords(password, user.password))) {
      res.status(200).json(
        generateResponseBody("success", 200, "Login Successful", {
          name: user.name,
          email: user.email,
          token: generateJWTToken(user.userId),
        })
      );
    } else {
      res
        .status(401)
        .json(generateResponseBody("unauthorized", 401, "Invalid Credentials"));
    }
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

/**
 *
 * @desc {*} Find user by Id
 * @route {*} GET: /api/users/find/:userId
 * @access {*} Protected
 */
const findUser = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await userModel.findById(userId, { password: 0, __v: 0 });

    if (!user) {
      res
        .status(200)
        .json(generateResponseBody("success", 200, "user not found", {}));
    } else {
      res
        .status(200)
        .json(generateResponseBody("success", 200, "user found", user));
    }
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

/**
 *
 * @desc {*} Get All Users
 * @route {*} GET: /api/users
 * @access {*} Protected
 */
const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const users = await userModel.find({}, { password: 0, __v: 0 });
    res.status(200).json(generateResponseBody("success", 200, "users", users));
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

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

module.exports = { registerUser, loginUser, findUser, getAllUsers };
