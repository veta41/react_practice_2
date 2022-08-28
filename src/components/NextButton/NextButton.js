export const NextButton = ({ onHandleClick, text }) => {
  return (
    <button onClick={onHandleClick} type="button">
      {text}
    </button>
  );
};
