const InvalidInput = (props) => {
  const resetValidUserState = () => {
    props.setValidUserState(true);
  };

  return (
    <div>
      <h1>Invalid Input</h1>
      Please enter valid input.
      <button type="button" onClick={resetValidUserState}>
        Okay
      </button>
    </div>
  );
};

export default InvalidInput;
