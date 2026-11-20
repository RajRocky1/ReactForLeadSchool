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

      <Student name="Som" age={30} isStudent={true} />
      <Student name="Shekar" age={42} isStudent={false} />
      <Student name="Raj" age={50} isStudent={false} />
      <Student name="Coder" age={27} isStudent={true} />


      <Footer />

    </>
  );
}

export default App;
