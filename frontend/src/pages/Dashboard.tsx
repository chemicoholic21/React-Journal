import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import DashCards from "../components/DashCards";
import DashCreate from "../components/DashCreate";
import DashHistory from "../components/DashHistory";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("at");

    if (!token) {
      navigate("/login");
      return;
    }
  }, []);

  return (
    <div className="w-full min-h-screen pb-6 bg-stone-200">
      <Navbar />
      <DashCards />
      <DashCreate />
      <DashHistory />
    </div>
  );
};

export default Dashboard;
