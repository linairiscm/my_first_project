

export default  function List({ names }) {
  return (
    <ul id="custom_list">
      {names.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}

