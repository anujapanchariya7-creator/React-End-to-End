import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar todos={todos} onSelect={setSelectedTodo} />
        <main className="flex-1 p-4">
          {selectedTodo ? selectedTodo.title : "Select a Todo"}
        </main>
      </div>
      <Footer />
    </div>
  );
}
