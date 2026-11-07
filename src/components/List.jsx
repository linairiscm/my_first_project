

export default function List({ children }) {
  return (
    <ul id="custom_list">
      {children}
    </ul>
  );
}

function ListItem({ children }) {
  return <li>{children}</li>;
}

List.Item = ListItem;