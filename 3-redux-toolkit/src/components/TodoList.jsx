import React, { useState } from "react";
import { Trash2, Pencil, Save, X } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../features/todos/todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editingTodo, setEditingTodo] = useState(null);

  const handleSave = () => {
    dispatch(editTodo(editingTodo));
    setEditingTodo(null);
  };

  return (
    <div className="mt-6 space-y-4 max-w-3xl mx-auto">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="p-4 border border-gray-300 rounded-lg shadow-md flex items-center justify-between hover:shadow-lg transition-all"
        >
          <div>
            <h3 className="font-semibold text-lg text-gray-800">{todo.title}</h3>
            <p className={`text-sm ${todo.urgent ? "text-red-600" : "text-green-600"} font-medium`}>
              {todo.urgent ? "Urgent" : "Not Urgent"}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="text-red-600  cursor-pointer hover:text-red-800 transition-colors duration-200 p-2 rounded-full border-2 border-red-600 hover:border-red-800"
            >
              <Trash2 size={18} />
            </button>
            <button
              onClick={() => setEditingTodo({ ...todo })}
              className="text-blue-600  cursor-pointer hover:text-blue-800 transition-colors duration-200 p-2 rounded-full border-2 border-blue-600 hover:border-blue-800"
            >
              <Pencil size={18} />
            </button>
          </div>
        </div>
      ))}

      {/* Edit Dialog Box */}
      {editingTodo && (
        <div className="fixed inset-0  bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Edit Todo</h2>
              <button onClick={() => setEditingTodo(null)} className="text-gray-500  cursor-pointer hover:text-red-600">
                <X />
              </button>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                value={editingTodo.title}
                onChange={(e) => setEditingTodo({ ...editingTodo, title: e.target.value })}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={editingTodo.urgent}
                  onChange={(e) => setEditingTodo({ ...editingTodo, urgent: e.target.checked })}
                  className="accent-red-500"
                />
                Mark as Urgent
              </label>
              <div className="flex gap-3 justify-end mt-4">
                <button
                  onClick={() => setEditingTodo(null)}
                  className="px-4 py-2 bg-gray-200 rounded cursor-pointer hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-blue-600  cursor-pointer text-white rounded hover:bg-blue-700 flex items-center gap-2"
                >
                  <Save size={16} />
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
