const Button = ({ btColor, btnClick }) => {
  return (
    <>
      <button
        className="rounded-xl h-32 active:scale-90 duration-200 text-white font-medium"
        style={{ backgroundColor: btColor }}
        onClick={btnClick}
      >
        {btColor}
      </button>
    </>
  );
};

export default Button;
