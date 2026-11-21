
function ClickButton() {

  // My first click event example
  // const handleClick = () => console.log("OUCH!");

  // Passing arguments to a click function
  // const handleClick2 = (name) => console.log(`${name} stop clicking me!`);

  // Now I'm using conditions inside the click function

  let count = 0;

  const handleClick = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name} you clicked me ${count} time/s`);
    }
    else {
      console.log(`${name} stop clicking me!`);
    }
  };

  return (
    <>
      {/* My first button */}
      {/* <button onClick={handleClick}>Click me 😊</button> */}

      {/* Passing an argument */}
      {/* <button onClick={() => handleClick2("Som")}>Click me 😊</button> */}

      <button onClick={() => handleClick("Som")}>
        Click me 😊
      </button>
    </>
  );
}

export default ClickButton;
