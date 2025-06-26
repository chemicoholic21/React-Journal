import { FaSpotify } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="py-20 w-full flex items-center justify-center gap-2">
      <div className="flex-1 px-8 py-12 flex flex-col items-start justify-start gap-6">
        <h2 className="text-6xl font-bold">
          Transform your thoughts <br />
          into clarity
        </h2>
        <p className="text-[20px] font-medium">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
          necessitatibus repudiandae cupiditate sed aspernatur maiores? Quod
          provident autem fugit quam iusto expedita? Reiciendis, expedita ut?
          Labore animi velit non debitis.
        </p>
        <div className="flex items-center justify-start gap-4">
          <button className="px-6 py-2 bg-black text-white rounded-xl hover:bg-stone-800 cursor-pointer">
            Start journaling free
          </button>
          <button className="px-4 py-[10px] flex items-center justify-center gap-2 hover:bg-stone-100 rounded-xl cursor-pointer">
            <FaSpotify />
            <span>Listen on Spotify</span>
          </button>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center py-12">
        <img
          src="/2659e386-3910-4771-820c-c2ed4029d419.jpg"
          alt="Illustration"
          className="rounded-xl shadow-xl"
        />
      </div>
    </div>
  );
};

export default Hero;
