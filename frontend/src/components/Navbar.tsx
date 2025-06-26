import { useLocation, useNavigate } from "react-router-dom";
import { links } from "../data/navLinks";
import { useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const user = {
    name: "Admin",
  };

  return (
    <div className="fixed z-10 top-0 w-full h-20 p-2">
      <nav className="bg-stone-100 w-full h-full rounded-xl flex items-center justify-between px-8">
        <div className="flex items-center justify-center text-lg font-medium">
          <h4
            onClick={() => navigate("/dashboard")}
            className="cursor-pointer text-xl font-bold"
          >
            Journal Mind
          </h4>
        </div>
        <div className="flex items-center justify-center gap-10">
          {location.pathname === "/" ? (
            <>
              {links.map((link) => {
                return (
                  <div className="hover:bg-stone-900 hover:text-white cursor-pointer p-1">
                    {link.content}
                  </div>
                );
              })}
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => navigate("/login")}
                  className="px-6 py-[6px] bg-stone-200 rounded-xl hover:bg-stone-300 cursor-pointer"
                >
                  Sign in
                </button>
                <button className="px-6 py-[6px] bg-black text-white rounded-xl hover:bg-stone-800 cursor-pointer">
                  Start Free
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center gap-4">
              <div
                onClick={() => setIsOpen((prev) => !prev)}
                className="size-10 cursor-pointer bg-black rounded-full flex items-center justify-center font-bold text-xl text-white"
              >
                {user.name?.[0]}
              </div>
            </div>
          )}
        </div>
        {isOpen && (
          <div className="px-2 py-4 bg-stone-100 rounded-xl shadow-xl fixed top-20 right-2 flex flex-col items-start justify-start gap-2">
            <button className="hover:bg-stone-200 rounded-xl cursor-pointer py-2 pr-8 pl-2 w-full flex items-center justify-start gap-2">
              <IoIosNotifications />
              <span>Notifications</span>
            </button>
            <button
              onClick={() => {
                localStorage.removeItem("at");
                navigate("/login");
              }}
              className="hover:bg-stone-200 text-red-800 rounded-xl cursor-pointer py-2 pr-8 pl-2 w-full flex items-center justify-start gap-2"
            >
              <IoLogOut />
              <span>Logout</span>
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
