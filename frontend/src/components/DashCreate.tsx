import { BiSolidEdit } from "react-icons/bi";
import { FaNoteSticky } from "react-icons/fa6";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const createCards = [
  {
    id: 1,
    title: "Quick notes",
    content: "Capture quick thoughts and ideas",
    icon: <FaNoteSticky />,
  },
  {
    id: 2,
    title: "Prompted Journal",
    content: "Write with guided prompts",
    icon: <IoChatbubbleEllipsesSharp />,
  },
  {
    id: 3,
    title: "Long Journal",
    content: "Deep dive into your thoughts",
    icon: <BiSolidEdit />,
  },
];

const DashCreate = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full px-10">
      <div className="flex flex-col items-start px-4 justify-center py-6 bg-stone-100 rounded-xl">
        <h3 className="text-2xl font-medium">New Entry</h3>
        <div className="w-full grid grid-cols-3 gap-8 my-4">
          {createCards.map((card) => {
            return (
              <div
                key={card.id}
                onClick={() =>
                  navigate("/" + card.title.toLowerCase().replace(" ", "-"))
                }
                className="bg-stone-50 group cursor-pointer hover:bg-stone-100 hover:border-blue-600 transition-all duration-150 border-2 border-gray-400 border-dashed w-full p-6 rounded-xl relative flex flex-col gap-1"
              >
                <p className="text-2xl font-medium">{card.title}</p>
                <h4 className="text-md font-medium">{card.content}</h4>
                <div className="absolute top-4 right-4 text-2xl duration-200 transition-all group-hover:rotate-[360deg]">
                  {card.icon}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DashCreate;
