
import { useState, useEffect } from "react";

export default function LoadingData() {
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (showUsers) {
      const fetchUsers = async () => {
        setLoading(true);

        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/users");
          const data = await response.json();

          await new Promise((resolve) => setTimeout(resolve, 1000));

          setUsers(data);
        } finally {
          setLoading(false);
        }
      };

      fetchUsers();
    }
  }, [showUsers]);

  const handleClick = () => {
    setShowUsers((prev) => !prev);
  };

  return (
    <section className="loading_data">
      <h2>Lista utenti</h2>

      <button onClick={handleClick}>
        {showUsers ? "Nascondi utenti" : "Carica utenti"}
      </button>

      {showUsers && loading && <p>Loading...</p>}

      {showUsers && !loading && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <p>Nome: {user.name}</p>
              <p>Email: {user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
