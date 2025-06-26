import { User } from "../../models/user.model.js";
import ApiResponse from "../../utils/ApiResponse.js";
import bcyrpt from "bcryptjs";

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send(new ApiResponse(400, null, "Required fields missing."));
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res
        .status(404)
        .send(new ApiResponse(404, null, "Invalid credentials."));
    }

    const verified = await bcyrpt.compare(password, existingUser.password);

    if (!verified) {
      return res
        .status(400)
        .send(new ApiResponse(400, null, "Invalid credentials."));
    }

    const at = existingUser.generateAccessToken();

    res
      .status(200)
      .send(
        new ApiResponse(200, { token: at }, "User logged in successfully.")
      );
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(new ApiResponse(500, error, "Failed to register user."));
  }
};

export { loginUser };
