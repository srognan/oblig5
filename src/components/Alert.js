const Alert = ({ setInputFromChild, inputFromChild, handleClick }) => {
  const handleChange = (event) => {
    console.log("changed");
    setInputFromChild(event.currentTarget.value);
  };
  return (
    <>
      <input type="text" onChange={handleChange} value={inputFromChild} />
      <button type="button" onClick={handleClick}>
        button
      </button>
    </>
  );
};

export default Alert;
