
import PropTypes from 'prop-types';

/*
// My previous list example with sorting and filtering

function List() {

  const fruits = [
    {id: 1, name: "apple", calories: 95},
    {id: 2, name: "orange", calories: 45},
    {id: 3, name: "banana", calories: 105},
    {id: 4, name: "coconut", calories: 159},
    {id: 5, name: "pineapple", calories: 37}
  ];

  // Sorting
  // fruits.sort((a, b) => a.name.localeCompare(b.name));
  // fruits.sort((a, b) => b.name.localeCompare(a.name));
  // fruits.sort((a, b) => a.calories - b.calories);
  // fruits.sort((a, b) => b.calories - a.calories);

  // Displaying all fruits
  // const listItems = fruits.map(fruit =>
  //   <li key={fruit.id}>
  //     {fruit.name}: &nbsp;
  //     <b>{fruit.calories}</b>
  //   </li>
  // );

  // Filtering
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
*/

// Adding default values to my reusable list component

function List({ category = "Category", items = [] }) {

  // Previously I was accessing the values using props
  // const category = props.category;
  // const itemList = props.items;

  const itemList = items;

  const listItems = itemList.map(item =>
    <li key={item.id}>
      {item.name}: &nbsp;
      <b>{item.calories}</b>
    </li>
  );

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}

// Defining the expected data types

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number
    })
  )
};

// This is how default props were used in older React versions

/*
List.defaultProps = {
  category: "Category",
  items: []
};
*/

export default List;
