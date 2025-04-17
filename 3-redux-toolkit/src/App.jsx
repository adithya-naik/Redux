import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-10 px-4">
      <h1 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        📋 Project: Todo App — Redux Toolkit
      </h1>

      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6 md:p-8 space-y-6">
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
