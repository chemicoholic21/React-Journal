import ApiResponse from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";

const checkAuth = async (req, res, next) => {
  try {
    const bearerAuth = req.headers.authorization;

    if (!bearerAuth) {
      return res
        .status(400)
        .send(new ApiResponse(400, null, "Missing authorization header."));
    }

    const token = bearerAuth.split(" ")[1];

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (!decoded) {
      return res
        .status(403)
        .send(new ApiResponse(403, null, "Invalid token payload."));
    }

    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).send(new ApiResponse(500, error, "Invalid token"));
  }
};

export default checkAuth;
