import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Card from './Card.jsx';
import Button from './Button/Button.jsx';
import Button2 from './Button/Button2.jsx';
import Student from './Student.jsx';

function App() {
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


      <Footer />

    </>
  );
}

export default App;
