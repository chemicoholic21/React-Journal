import { FaForward, FaStar } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import { MdInsights } from "react-icons/md";
import { useState, type FormEvent } from "react";

const PromptedJournal = () => {
  const [data, setData] = useState({
    experience: "",
    reflection: "",
    action: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="w-full min-h-screen pb-6 bg-stone-200">
      <Navbar />
      <div className="pt-22 px-32 w-full">
        <form
          onSubmit={handleSubmit}
          className="flex rounded-xl flex-col items-start justify-start gap-2 bg-stone-100 py-4 px-8"
        >
          <h4 className="text-xl font-medium mt-2">New Journal Entry</h4>
          <p>Using ERA (Experience, Reflection, Action) method</p>
          <div className="w-full">
            <h4 className="text-lg font-medium mt-4 flex items-center justify-start gap-2">
              <FaStar />
              <span>Experience</span>
            </h4>
            <label
              htmlFor="experience"
              className="w-full flex flex-col items-start justify-start gap-2"
            >
              <span>Describe a recent experience you want to reflect on</span>
              <textarea
                name="experience"
                id="experience"
                rows={5}
                placeholder="What happened? Tell your story..."
                value={data.experience}
                onChange={(e) =>
                  setData((prev) => {
                    return { ...prev, experience: e.target.value };
                  })
                }
                className="bg-stone-50 resize-none border border-neutral-400 p-2 w-full"
              />
            </label>
          </div>
          <div className="w-full">
            <h4 className="text-lg font-medium mt-4 flex items-center justify-start gap-2">
              <MdInsights />
              <span>Reflection</span>
            </h4>
            <label
              htmlFor="reflection"
              className="w-full flex flex-col items-start justify-start gap-2"
            >
              <span>
                How did this experience make you feel and what did you learn?
              </span>
              <textarea
                name="reflection"
                id="reflection"
                rows={5}
                placeholder="What thoughts and feelings came up for you?"
                value={data.reflection}
                onChange={(e) =>
                  setData((prev) => {
                    return { ...prev, reflection: e.target.value };
                  })
                }
                className="bg-stone-50 resize-none border border-neutral-400 p-2 w-full"
              />
            </label>
          </div>
          <div className="w-full">
            <h4 className="text-lg font-medium mt-4 flex items-center justify-start gap-2">
              <FaForward />
              <span>Action</span>
            </h4>
            <label
              htmlFor="action"
              className="w-full flex flex-col items-start justify-start gap-2"
            >
              <span>What will you do differently next time?</span>
              <textarea
                name="action"
                id="action"
                rows={5}
                placeholder="What steps will you take moving forward?"
                value={data.action}
                onChange={(e) =>
                  setData((prev) => {
                    return { ...prev, action: e.target.value };
                  })
                }
                className="bg-stone-50 resize-none border border-neutral-400 p-2 w-full"
              />
            </label>
          </div>
          <div className="w-full flex items-center justify-end">
            <button className="px-6 py-2 bg-black text-white hover:bg-stone-800 cursor-pointer">
              Complete entry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PromptedJournal;
