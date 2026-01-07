import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-blue-600 text-white">
      <h1 className="font-bold text-lg">Todos App</h1>
      {user && (
        <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
          Sign Out
        </button>
      )}
    </nav>
  );
}
