import { FaHeart, FaPenNib } from "react-icons/fa6";
import { IoMoonSharp } from "react-icons/io5";
import { LuGoal } from "react-icons/lu";

const homeCards = [
  {
    id: 1,
    title: "Gratitude Journal",
    content: "Focus on daily appreciation and positive experiences.",
    icon: <FaPenNib />,
  },
  {
    id: 2,
    title: "Dream Journal",
    content: "Record and analyze your dreams and their meanings",
    icon: <IoMoonSharp />,
  },
  {
    id: 3,
    title: "Emotional Journal",
    content: "Track your feelings and emotional patterns",
    icon: <FaHeart />,
  },
  {
    id: 4,
    title: "Goal Journal",
    content: "Plan and track your personal objectives quickly",
    icon: <LuGoal />,
  },
];

const Cards = () => {
  return (
    <div className="w-full bg-stone-100 flex flex-col items-center justify-start py-16">
      <h3 className="my-4 font-bold text-2xl">Different Types of Journaling</h3>
      <div className="px-16 grid grid-cols-4 gap-8">
        {homeCards.map((card) => {
          return (
            <div className="bg-stone-100 shadow-xl p-4 rounded-xl flex flex-col items-start justify-start gap-2">
              <span>{card.icon}</span>
              <h4 className="text-lg font-bold">{card.title}</h4>
              <h4 className="text-md font-medium">{card.content}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
