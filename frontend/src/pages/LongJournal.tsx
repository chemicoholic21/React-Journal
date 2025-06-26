import { FaRegClock, FaTag } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FaRegSmile } from "react-icons/fa";
import { useState, type FormEvent } from "react";
import { IoMdClose } from "react-icons/io";

const LongJournal = () => {
  const [isTagOpen, setIsTagOpen] = useState(false);
  const [isMoodOpen, setIsMoodOpen] = useState(false);
  const [emojis] = useState(["😭", "😢", "😐", "😊", "😃"]);
  const [mood, setMood] = useState(1);
  const [tag, setTag] = useState("");
  const [data, setData] = useState({
    title: "",
    content: "",
    tags: "",
    mood: 1,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="w-full min-h-screen pb-6 bg-stone-200">
      <Navbar />
      <div className="pt-22 px-32 w-full">
        <form onSubmit={handleSubmit} className="bg-stone-100 p-8 rounded-xl">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Give your entry a title..."
            value={data.title}
            onChange={(e) =>
              setData((prev) => {
                return { ...prev, title: e.target.value };
              })
            }
            className="text-4xl w-full p-2 appearance-none focus-within:outline-none"
          />
          <div className="w-full h-[2px] bg-stone-300 my-4 mx-2"></div>
          <div className="flex items-center justify-start gap-5 mx-2">
            <div className="flex items-center justify-center gap-1">
              <IoCalendarNumberOutline />
              <span>{new Date().toDateString()}</span>
            </div>
            <div className="flex items-center justify-center gap-1">
              <FaRegClock />
              <span>{new Date().toLocaleTimeString()}</span>
            </div>
          </div>
          <div className="mx-2 mt-4">
            <textarea
              name="content"
              id="content"
              rows={10}
              placeholder="Start writing your thoughts..."
              value={data.content}
              onChange={(e) =>
                setData((prev) => {
                  return { ...prev, content: e.target.value };
                })
              }
              className="bg-transparent resize-none focus-within:outline-none w-full"
            ></textarea>
          </div>
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
                className="px-6 py-2 rounded-xl bg-black text-white hover:bg-stone-800 cursor-pointer"
              >
                Save entry
              </button>
            </div>
          </div>
        </form>
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

export default LongJournal;
