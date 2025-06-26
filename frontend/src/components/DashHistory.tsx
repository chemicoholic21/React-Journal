const journals = [
  {
    id: 1,
    title: "Morning Reflection",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores repellendus expedita nihil ab consequuntur aut ipsum id voluptas cupiditate esse.",
    timestamp: "May 11, 2025",
  },
  {
    id: 2,
    title: "Gratitude List",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores repellendus expedita nihil ab consequuntur aut ipsum id voluptas cupiditate esse.",
    timestamp: "May 10, 2025",
  },
  {
    id: 3,
    title: "Weekly Goals",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores repellendus expedita nihil ab consequuntur aut ipsum id voluptas cupiditate esse.",
    timestamp: "May 9, 2025",
  },
];

const DashHistory = () => {
  return (
    <div className="w-full my-4 px-10">
      <div className="flex flex-col items-start px-4 justify-center py-6 bg-stone-100 rounded-xl">
        <h4 className="text-xl font-medium mb-4">Past entries</h4>
        <div className="w-full flex flex-col items-start justify-start gap-2">
          {journals.map((journal) => {
            return (
              <div
                key={journal.id}
                className="relative rounded-xl px-4 py-2 cursor-pointer hover:bg-stone-100 hover:border-blue-600 transition-all duration-150 border-2 border-gray-400 border-dashed w-full"
              >
                <h3 className="text-md font-medium">{journal.title}</h3>
                <h4 className="max-w-xl truncate">{journal.content}</h4>
                <p className="absolute top-4 right-4">{journal.timestamp}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DashHistory;
