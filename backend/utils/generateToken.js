import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  // generate token
  let token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });

  res.cookie("jwt", token, {
    secure: false,
    sameSite: "strict", //prevent csrf attacks
    maxage: 60 * 60 * 1000, //1 day in milliseconds
    httpOnly: true, //after login ,jwt is stored in the frontend.cookies as httplOnly cookie,so request after login will be attatched with the jwt token stored in the cookies
  });
};

export default generateToken;
