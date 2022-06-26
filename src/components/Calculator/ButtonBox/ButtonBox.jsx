import Button from "../Button/Button";

function ButtonBox() {
  const buttons = [
    ["C", "%", "!", "*"],
    [7, 8, 9, "/"],
    [4, 5, 6, "+"],
    [1, 2, 3, "-"],
    [0, ".", "="],
  ];
  return (
    <div className="bg-slate-600 h-full -mt-32 pt-24  px-2 w-full flex flex-col justify-center space-y-5">
      {buttons.map((item) => {
        return (
          <div className="flex flex-row justify-between">
            {item.map((innerItem) => (
              <Button value={innerItem} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default ButtonBox;
