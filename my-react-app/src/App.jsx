
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Card from './Card.jsx';
import Button from './Button/Button.jsx';
import Button2 from './Button/Button2.jsx';
import Student from './Student.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';
import ClickButton from './ClickButton.jsx';

function App() {

  const fruits = [
    {id: 1, name: "apple", calories: 95},
    {id: 2, name: "orange", calories: 45},
    {id: 3, name: "banana", calories: 105},
    {id: 4, name: "coconut", calories: 159},
    {id: 5, name: "pineapple", calories: 37}
  ];

  const vegetables = [
    {id: 6, name: "potatoes", calories: 110},
    {id: 7, name: "celery", calories: 15},
    {id: 8, name: "carrots", calories: 25},
    {id: 9, name: "corn", calories: 63},
    {id: 10, name: "broccoli", calories: 50}
  ];

  return (
    <>
      <Header />
      <Card />
      <Button />

      <Button2 />

      <Student name="Som" age={20} isStudent={true} />
      <Student name="Shekar" age={22} isStudent={false} />
      <Student name="Raj" age={20} isStudent={false} />
      <Student name="Coder" age={22} isStudent={true} />

      <Student />
      <Student name="Larry" />

      <UserGreeting isLoggedIn={true} username="Som" />
      <UserGreeting isLoggedIn={false} username="Shekar" />

      {/* My first list component */}
      {/* <List /> */}

      {/* Displaying lists using props */}
      {/* <List items={fruits} category="Fruits" /> */}
      {/* <List items={vegetables} category="Vegetables" /> */}

      {/* Conditional rendering using ternary operator */}
      {/* {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null} */}
      {/* {vegetables.length > 0 ? <List items={vegetables} category="Vegetables" /> : null} */}

      {/* Using && instead of ternary operator */}

      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}

      {/* Testing default values */}
      {/* <List /> */}

      <ClickButton />

      <Footer />
    </>
  );
}

export default App;
