import { useEffect, useState } from "react";
import { FaSmile } from "react-icons/fa";
import { FaBook, FaClock, FaFire } from "react-icons/fa6";
import { getDashboardStatistics } from "../api/dashboard";
import { useNavigate } from "react-router-dom";

const DashCards = () => {
  const [metrics, setMetrics] = useState({
    averageMood: "",
    totalEntries: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchStats = async () => {
      const token = localStorage.getItem("at");

      if (!token) {
        navigate("/login");
        return;
      }
      const response = await getDashboardStatistics(token);
      if (response.success) {
        setMetrics(response.payload);
        console.log(response);
      }
    };

    fetchStats();
  }, []);

  const [cards] = useState([
    {
      id: 1,
      caption: "Current Streak",
      content: "0 day(s)",
      icon: <FaFire />,
    },
    {
      id: 2,
      caption: "Total entries",
      content: metrics?.totalEntries,
      icon: <FaBook />,
    },
    {
      id: 3,
      caption: "Time spent",
      content: "2 hour(s)",
      icon: <FaClock />,
    },
    {
      id: 4,
      caption: "Mood average",
      content: metrics?.averageMood,
      icon: <FaSmile />,
    },
  ]);

  return (
    <div className="pt-20 w-full px-10">
      <div className="grid grid-cols-4 gap-8 py-6">
        {cards.map((card, index) => {
          return (
            <div
              key={card.id}
              className="bg-stone-100 p-4 rounded-xl relative flex flex-col gap-2"
            >
              <p className="text-md font-medium">{card.caption}</p>
              <h4 className="text-3xl font-medium">
                {index + 1 === 2
                  ? metrics.totalEntries
                  : index + 1 === 4
                  ? metrics.averageMood
                  : card.content}
              </h4>
              <div className="absolute top-4 right-4 text-2xl">{card.icon}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashCards;
