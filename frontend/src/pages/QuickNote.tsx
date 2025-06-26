import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState, type FormEvent } from "react";
import { FaClock, FaLightbulb, FaTag } from "react-icons/fa6";
import { FaRegSmile } from "react-icons/fa";
import { MdFormatListBulleted } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const tips = [
  {
    id: 1,
    icon: <FaLightbulb />,
    content: "Keep it brief and focused on key thoughts",
  },
  {
    id: 2,
    icon: <FaClock />,
    content: "Aim for 2-3 minutes per quick note",
  },
  {
    id: 3,
    icon: <MdFormatListBulleted />,
    content: "Use bullet points for better organization",
  },
];

const QuickNote = () => {
  const navigate = useNavigate();
  const [tag, setTag] = useState("");
  const [data, setData] = useState({
    title: "",
    content: "",
    tags: "",
    mood: 1,
  });
  const [isTagOpen, setIsTagOpen] = useState(false);
  const [isMoodOpen, setIsMoodOpen] = useState(false);
  const [emojis] = useState(["😭", "😢", "😐", "😊", "😃"]);
  const [mood, setMood] = useState(1);

  useEffect(() => {
    const token = localStorage.getItem("at");

    if (!token) {
      navigate("/login");
    }
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="w-full min-h-screen pb-6 bg-stone-200">
      <Navbar />
      <div className="pt-22 px-2 w-full">
        <div className="relative flex rounded-xl flex-col items-start justify-start bg-stone-100 p-4">
          <p className="absolute top-4 right-4">
            {new Date().toDateString()} |{" "}
            {new Date().getHours() +
              " : " +
              new Date().getMinutes() +
              (new Date().getHours() > 12 ? " PM" : " AM")}
          </p>
          <h4 className="text-xl font-medium mb-4">Quick Notes</h4>
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-start justify-start gap-4"
          >
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              value={data.title}
              onChange={(e) =>
                setData((prev) => {
                  return { ...prev, title: e.target.value };
                })
              }
              className="bg-stone-50 border border-neutral-400 p-2 w-full"
            />
            <textarea
              name="content"
              id="content"
              rows={10}
              placeholder="What's on your mind?"
              value={data.content}
              onChange={(e) =>
                setData((prev) => {
                  return { ...prev, content: e.target.value };
                })
              }
              className="bg-stone-50 border resize-none border-neutral-400 p-2 w-full"
            ></textarea>
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center justify-center gap-5">
                <span
                  onClick={() => setIsTagOpen(true)}
                  className="flex items-center justify-center gap-1 hover:bg-stone-200 p-2 rounded-xl cursor-pointer"
                >
                  <FaTag />
                  <span>Add tags</span>
                </span>
                <span
                  onClick={() => setIsMoodOpen(true)}
                  className="flex items-center justify-center gap-1 hover:bg-stone-200 p-2 rounded-xl cursor-pointer"
                >
                  <FaRegSmile />
                  <span>Mood</span>
                </span>
              </div>
              <div>
                <button
                  type="submit"
                  className="px-6 py-2 bg-black text-white hover:bg-stone-800 cursor-pointer"
                >
                  Save entry
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="flex rounded-xl flex-col items-start justify-start bg-stone-100 p-4 my-4">
          <h4 className="text-xl font-medium my-2">Quick Tips</h4>
          <div className="w-full grid grid-cols-3 gap-8">
            {tips.map((tip) => {
              return (
                <div
                  key={tip.id}
                  className="bg-stone-50 border border-neutral-500 border-dashed p-4 flex flex-col items-start justify-start gap-2"
                >
                  <div>{tip.icon}</div>
                  <h5>{tip.content}</h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {isTagOpen && (
        <div className="fixed top-0 z-30 w-full h-screen bg-black/90 flex items-center justify-center">
          <div className="relative w-[30vw] min-w-[400px] flex bg-white p-4 flex-col items-start justify-start gap-4">
            <h4 className="text-lg font-medium">
              Tag your note to organize better
            </h4>
            <label
              htmlFor="tag"
              className="w-full flex flex-col items-start justify-start gap-2"
            >
              <span>Tag name</span>
              <input
                type="text"
                name="tag"
                id="tag"
                placeholder="Eg: Shopping, Hobbies"
                className="w-full border border-neutral-500 p-2"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              />
            </label>
            <button
              onClick={() => {
                setData((prev) => {
                  return {
                    ...prev,
                    tags: tag,
                  };
                });
                setIsTagOpen(false);
              }}
              className="bg-stone-950 w-full py-2 text-white cursor-pointer"
            >
              Add tag
            </button>
            <span
              onClick={() => setIsTagOpen(false)}
              className="absolute top-4 right-4 text-xl cursor-pointer"
            >
              <IoMdClose />
            </span>
          </div>
        </div>
      )}
      {isMoodOpen && (
        <div className="fixed top-0 z-30 w-full h-screen bg-black/90 flex items-center justify-center">
          <div className="relative w-[30vw] min-w-[400px] flex bg-white p-4 flex-col items-start justify-start gap-4">
            <h4 className="text-lg font-medium">Add a mood to your note</h4>
            <div className="w-full flex items-center justify-center gap-8">
              {emojis.map((emoji, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => setMood(index + 1)}
                    className={`cursor-pointer hover:scale-[600%] hover:rotate-[360deg] transition-all duration-150 text-4xl rounded-full flex items-center justify-center ${
                      mood - 1 !== index ? "grayscale-100" : ""
                    }`}
                  >
                    {emoji}
                  </div>
                );
              })}
            </div>
            <button
              onClick={() => {
                setData((prev) => {
                  return { ...prev, mood: mood };
                });
                setIsMoodOpen(false);
              }}
              className="w-full py-2 bg-black text-white rounded-xl hover:bg-stone-800 cursor-pointer"
            >
              Save
            </button>
            <span
              onClick={() => setIsMoodOpen(false)}
              className="absolute top-4 right-4 text-xl cursor-pointer"
            >
              <IoMdClose />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickNote;
