
function List() {

  const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

  const listItems = fruits.map(fruit => <li key={fruit}>{fruit}</li>);

  return (
    <ul>{listItems}</ul>
  );
}

export default List;
