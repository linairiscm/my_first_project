
import { useState, useEffect } from "react";

export default function LoadingData() {
  const [users, setUsers] = useState();
  const [trigger, setTrigger] = useState(false);

  const getData = async () => {
    const promise = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await promise.json();

    setUsers(json);
  };

  useEffect(() => {
    if (trigger) {
      getData();
    }
  }, [trigger]);

  const handleClick = () => {
    setTrigger(true);
  };

  return (
    <section className="loading_data">
      <h2>Lista utenti</h2>

      <button onClick={handleClick}>Carica utenti</button>

      <ul>
        {users && users.map((user) => {
          return (
            <li key={user.id}>
              <p>Nome: {user.name}</p>
              <p>Email: {user.email}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
