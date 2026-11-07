
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import List from "./components/List";
import Counter from "./components/Counter";
import Form from "./components/Form";

function App() {
  const names = ["Marco", "Luca", "Giulia", "Andrea"];

  return (
    <>
      <Navbar />
      <Header title="Benvenuto nel mio sito!" />

      <List>
        {names.map((name) => (
          <List.Item key={name}>{name}</List.Item>
        ))}
      </List>

      <Counter />
      <Form />
    </>
  );
}

export default App;
