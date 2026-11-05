
function App() {
  return (
    <>
      <h1 className="titolo">Benvenuto in React!</h1>

      <label className="etichetta" htmlFor="nome">
        Inserisci il tuo nome:
      </label>

      <input
        className="input-nome"
        type="text"
        id="nome"
        placeholder="Scrivi il tuo nome"
      />
    </>
  );
}

export default App;
