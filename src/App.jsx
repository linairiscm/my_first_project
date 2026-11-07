import Navbar from "./components/Navbar";
import Header from "./components/Header";
import List from "./components/List";

function App() {

  const names = ["Marco", "Luca", "Giulia", "Andrea"];

  return (
    <>
      <Navbar />
      <Header title="Benvenuto nel mio sito!"/>
      <List names={names} />
    </>
  );
}

export default App;
