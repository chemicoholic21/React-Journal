import { useState, type FormEvent } from "react";
import { FaPenFancy } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confPassword: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);

    if (data.password !== data.confPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const res = await registerUser(data);
      console.log(res);
      alert(res.message);
    } catch (error) {
      console.log(error);
      alert("Failed to register user.");
    }
  };

  return (
    <div className="w-full h-screen bg-stone-200 flex items-center justify-center">
      <main className="max-w-md min-w-md px-8 py-6 bg-white rounded-xl shadow-xl flex flex-col items-center justify-start gap-2">
        <h3 className="flex items-center justify-center gap-2">
          <FaPenFancy />
          <span className="text-xl font-bold">Journal Mind</span>
        </h3>
        <h4 className="text-center">Create an account</h4>
        <form
          onSubmit={handleSubmit}
          className="my-2 w-full flex flex-col items-start justify-start gap-4"
        >
          <label
            htmlFor="email"
            className="flex w-full flex-col items-start justify-start gap-1"
          >
            <span>Name</span>
            <input
              type="name"
              name="name"
              id="name"
              autoComplete="off"
              value={data.name}
              onChange={(e) =>
                setData((prev) => {
                  return { ...prev, name: e.target.value };
                })
              }
              className="w-full text-xl bg-stone-100 rounded-xl px-2 py-1"
            />
          </label>
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
          <label
            htmlFor="password"
            className="flex w-full flex-col items-start justify-start gap-1"
          >
            <span>Confirm password</span>
            <input
              type="password"
              name="conf-password"
              id="conf-password"
              value={data.confPassword}
              onChange={(e) =>
                setData((prev) => {
                  return { ...prev, confPassword: e.target.value };
                })
              }
              className="w-full text-xl bg-stone-100 rounded-xl px-2 py-1"
            />
          </label>
          <button
            type="submit"
            className="w-full py-[6px] bg-black text-white rounded-xl hover:bg-stone-800 cursor-pointer"
          >
            Sign up
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-blue-800 hover:underline underline-offset-4 cursor-pointer"
          >
            Sign in
          </button>
        </p>
      </main>
    </div>
  );
};

export default Signup;
