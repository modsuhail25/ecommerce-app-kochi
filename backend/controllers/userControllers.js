import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: encryptedPassword,
  });

  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

const authUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    // generate token
    let token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    res.cookie("jwt", token, {
      secure: false,
      sameSite: "strict", //prevent csrf attacks
      maxage: 60 * 60 * 1000, //1 day in milliseconds
      httpOnly: true, //after login ,jwt is stored in the frontend;s cookies as httplOnly cookie,so request after login will be attatched with the jwt token stored in the cookies
    });
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email and password");
  }
});

const logout = (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expiresIn: new Date(0),
  });

  res.status(200).json({ message: "Logged Out Successfully" });
};

const getUserProfile = () => {};

export { registerUser, authUser, logout, getUserProfile };
