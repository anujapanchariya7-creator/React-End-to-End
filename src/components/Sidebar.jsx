export default function Sidebar({ todos, onSelect }) {
  return (
    <aside className="w-64 bg-gray-100 p-4 border-r">
      <h3 className="font-semibold mb-3">Todos</h3>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => onSelect(todo)}
            className="cursor-pointer p-2 rounded hover:bg-gray-200"
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </aside>
  );
}
