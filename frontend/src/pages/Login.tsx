import { useState, type FormEvent } from "react";
import { FaPenFancy } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);

    try {
      const res = await loginUser(data);
      if (res.success) {
        console.log(res);
        localStorage.setItem("at", res?.payload?.token);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
      alert("Failed to log user in.");
    }
  };

  return (
    <div className="w-full h-screen bg-stone-200 flex items-center justify-center">
      <main className="max-w-md min-w-md px-8 py-6 bg-white rounded-xl shadow-xl flex flex-col items-center justify-start gap-4">
        <h3 className="flex items-center justify-center gap-2">
          <FaPenFancy />
          <span className="text-xl font-bold">Journal Mind</span>
        </h3>
        <h4 className="text-center">Welcome back</h4>
        <p className="text-center text-md text-gray-800 font-medium">
          Enter your credentials to access your journal
        </p>
        <form
          onSubmit={handleSubmit}
          className="my-2 w-full flex flex-col items-start justify-start gap-2"
        >
          <label
            htmlFor="email"
            className="flex w-full flex-col items-start justify-start gap-1"
          >
            <span>Email</span>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              value={data.email}
              onChange={(e) =>
                setData((prev) => {
                  return { ...prev, email: e.target.value };
                })
              }
              className="w-full text-xl bg-stone-100 rounded-xl px-2 py-1"
            />
          </label>
          <label
            htmlFor="password"
            className="flex w-full flex-col items-start justify-start gap-1"
          >
            <span>Password</span>
            <input
              type="password"
              name="password"
              id="password"
              value={data.password}
              onChange={(e) =>
                setData((prev) => {
                  return { ...prev, password: e.target.value };
                })
              }
              className="w-full text-xl bg-stone-100 rounded-xl px-2 py-1"
            />
          </label>
          <div className="w-full flex items-center justify-end">
            <button className="text-blue-800 hover:underline underline-offset-4 cursor-pointer">
              Forgot password?
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-[6px] bg-black text-white rounded-xl hover:bg-stone-800 cursor-pointer"
          >
            Sign in
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-blue-800 hover:underline underline-offset-4 cursor-pointer"
          >
            Sign up
          </button>
        </p>
      </main>
    </div>
  );
};

export default Login;
