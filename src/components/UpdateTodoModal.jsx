export default function UpdateTodoModal({ todo, onClose, onSave }) {
  const [title, setTitle] = useState(todo.title);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-80">
        <h3 className="font-bold mb-3">Update Todo</h3>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input mb-3"
        />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="btn-secondary">Cancel</button>
          <button
            onClick={() => onSave(title)}
            className="btn-primary"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
