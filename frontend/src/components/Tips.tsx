import { CgDetailsMore } from "react-icons/cg";
import { FaClock } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const tipCards = [
  {
    id: 1,
    title: "Set a regular time",
    content:
      "Make journaling a daily habit by writing at the same time each day",
    icon: <FaClock />,
  },
  {
    id: 2,
    title: "Find your space",
    content: "Create a comfortable, distraction-free environment",
    icon: <IoLocationSharp />,
  },
  {
    id: 3,
    title: "Use prompts",
    content: "Start writing with prompts when you're feeling stuck",
    icon: <CgDetailsMore />,
  },
];

const Tips = () => {
  return (
    <div className="w-full bg-stone-200 flex flex-col items-center justify-start py-16">
      <h3 className="my-4 font-bold text-2xl">Journaling Tips & Techniques</h3>
      <div className="px-16 grid grid-cols-3 gap-8">
        {tipCards.map((card) => {
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

export default Tips;
