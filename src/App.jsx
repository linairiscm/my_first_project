
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import List from "./components/List";
import Counter from "./components/Counter";
import Form from "./components/Form";
import LoadingData from "./components/LoadingData";

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
      <LoadingData />
    </>
  );
}

export default App;
