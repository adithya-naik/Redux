import React, { useState } from "react";
import { Plus } from "lucide-react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

const AddTodo = () => {
  const [inputData, setInputData] = useState({
    title: "",
    urgent: false,
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputData.title.trim() === "") return;

    dispatch(addTodo(inputData));
    setInputData({ title: "", urgent: false });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-6 flex flex-col md:flex-row items-center gap-4 transition-all"
    >
      <input
        type="text"
        placeholder="Enter a task..."
        value={inputData.title}
        onChange={(e) => setInputData({ ...inputData, title: e.target.value })}
        className="flex-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      />

      <label className="flex items-center gap-2 text-sm text-gray-700">
        <input
          type="checkbox"
          checked={inputData.urgent}
          onChange={(e) => setInputData({ ...inputData, urgent: e.target.checked })}
          className="  cursor-pointer accent-red-600 w-4 h-4"
        />
        Urgent
      </label>

      <button
        type="submit"
        className="flex  cursor-pointer items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-all shadow-md"
      >
        <Plus size={18} />
        Add
      </button>
    </form>
  );
};

export default AddTodo;
