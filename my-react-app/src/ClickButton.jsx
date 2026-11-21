
function ClickButton() {

  // My first onClick example
  // const handleClick = () => console.log("OUCH!");

  // Passing a name to my click function
  const handleClick2 = (name) => console.log(`${name} stop clicking me!`);

  return (
    <>
      {/* My previous button */}
      {/* <button onClick={handleClick}>Click me 😊</button> */}

      <button onClick={() => handleClick2("Som")}>
        Click me 😊
      </button>
    </>
  );
}

export default ClickButton;
