
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
        <Form.Field
          label="Nome:"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Form.Field
          label="Email:"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Form.Button>Invia</Form.Button>
      </form>

      {submittedData && (
        <Form.Card name={submittedData.name} email={submittedData.email} />
      )}
    </section>
  );
}

function FormField({ label, id, type, value, onChange }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

function FormButton({ children }) {
  return <button type="submit">{children}</button>;
}

function FormCard({ name, email }) {
  return (
    <article className="user_card">
      <h3>Dati inseriti</h3>
      <p>Nome: {name}</p>
      <p>Email: {email}</p>
    </article>
  );
}

Form.Field = FormField;
Form.Button = FormButton;
Form.Card = FormCard;