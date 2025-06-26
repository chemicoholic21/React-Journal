import { User } from "../../models/user.model.js";
import ApiResponse from "../../utils/ApiResponse.js";
import bcyrpt from "bcryptjs";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .send(new ApiResponse(400, null, "Required fields missing."));
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(409)
        .send(
          new ApiResponse(
            409,
            null,
            "User with the provided credentials already exists."
          )
        );
    }

    const hashed = await bcyrpt.hash(password, 10);

    const createdUser = await User.create({
      name,
      email,
      password: hashed,
    });

    res
      .status(201)
      .send(
        new ApiResponse(
          201,
          createdUser,
          "User account registered successfully."
        )
      );
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(new ApiResponse(500, error, "Failed to register user."));
  }
};

export { registerUser };
