
function List() {

  const fruits = [
    {id: 1, name: "apple", calories: 95},
    {id: 2, name: "orange", calories: 45},
    {id: 3, name: "banana", calories: 105},
    {id: 4, name: "coconut", calories: 159},
    {id: 5, name: "pineapple", calories: 37}
  ];

  // Sorting the fruits by name and calories

  // fruits.sort((a, b) => a.name.localeCompare(b.name)); // alphabetical
  // fruits.sort((a, b) => b.name.localeCompare(a.name)); // reverse alphabetical
  // fruits.sort((a, b) => a.calories - b.calories); // low to high
  // fruits.sort((a, b) => b.calories - a.calories); // high to low

  // Previously I was displaying all the fruits

  /*
  const listItems = fruits.map(fruit =>
    <li key={fruit.id}>
      {fruit.name}: &nbsp;
      <b>{fruit.calories}</b>
    </li>
  );
  */

  // Filtering fruits with less than 100 calories

  const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

  // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

  const listItems = lowCalFruits.map(fruit =>
    <li key={fruit.id}>
      {fruit.name}: &nbsp;
      <b>{fruit.calories}</b>
    </li>
  );

  return (
    <ol>{listItems}</ol>
  );
}

export default List;

