const OnClickBtn = ({ onClickHandler, btnText }) => {
  return (
    <button className="btn-primary" onClick={onClickHandler}>
      {btnText}
    </button>
  );
};

const OnClickBtnSecondary = ({ onClickHandler, btnText }) => {
  return (
    <button className="btn-secondary" onClick={onClickHandler}>
      {btnText}
    </button>
  );
};
const OnClickBtnGhost = ({ onClickHandler, btnText }) => {
  return (
    <button className="btn-ghost" onClick={onClickHandler}>
      {btnText}
    </button>
  );
};

export { OnClickBtn, OnClickBtnSecondary, OnClickBtnGhost };
