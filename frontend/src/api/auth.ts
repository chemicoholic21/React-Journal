import axios from "axios";

const APP_URL = "http://localhost:5000";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

interface LoginForm {
  email: string;
  password: string;
}

const registerUser = async (data: RegisterForm) => {
  try {
    const res = await axios.post(`${APP_URL}/api/auth/register`, data);
    return res.data;
  } catch (error: any) {
    console.log(error);
    return error.response.data;
  }
};

const loginUser = async (data: LoginForm) => {
  try {
    const res = await axios.post(`${APP_URL}/api/auth/login`, data);
    return res.data;
  } catch (error: any) {
    console.log(error);
    return error.response.data;
  }
};

export { registerUser, loginUser };
