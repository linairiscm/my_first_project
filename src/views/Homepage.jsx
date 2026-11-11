
import Header from "../components/Header";
import List from "../components/List";
import Counter from "../components/Counter";
import Form from "../components/Form";
import LoadingData from "../components/LoadingData";

export default function Homepage() {
  const names = ["Marco", "Luca", "Giulia", "Andrea"];

  return (
    <>
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
