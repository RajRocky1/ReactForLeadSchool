// import index from './index.css';
function ClickButton() {

  const handleClick = () => console.log("OUCH!");

  return (
    <button className = "btn-clk" onDoubleClick={handleClick}>Click me 😊</button>
  );
}

export default ClickButton;
