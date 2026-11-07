
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData({ name, email });
  };

  return (
    <section className="form_section">
      <h2>Inserisci i tuoi dati</h2>

      <form className="user_form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Invia</button>
      </form>

      {submittedData && (
        <article className="user_card">
          <h3>Dati inseriti</h3>
          <p>Nome: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
        </article>
      )}
    </section>
  );
}
