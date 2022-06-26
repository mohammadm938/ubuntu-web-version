import { useContext } from "react";
import {
  FirstNumberContext,
  SecondNumberContext,
  OperatorContext,
  SetFirstNumberContext,
  SetSecondNumberContext,
  SetOperatorContext,
  SetResult,
} from "../Calculator";

function Button({ value }) {
  const firstNumber = useContext(FirstNumberContext);
  const secondNumber = useContext(SecondNumberContext);
  const operator = useContext(OperatorContext);

  const setFirstNumber = useContext(SetFirstNumberContext);
  const setSecondNumber = useContext(SetSecondNumberContext);
  const setOperator = useContext(SetOperatorContext);

  const setResult = useContext(SetResult);

  const showResult = () => {
    console.log(firstNumber);
    console.log(operator);
    console.log(secondNumber);

    let result = 0;
    let firstNum = parseFloat(firstNumber);
    let secondNum = parseFloat(secondNumber);

    switch (operator) {
      case "*":
        result = firstNum * secondNum;
        break;
      case "+":
        result = firstNum + secondNum;
        break;
      case "-":
        result = firstNum - secondNum;
        break;
      case "/":
        result = firstNum / secondNum;
        break;
      case "%":
        result = firstNum % secondNum;
        break;

      default:
        break;
    }
    setResult(result);
  };

  const clearStates = () => {
    // set all states by null value
    setFirstNumber(null);
    setSecondNumber(null);
    setOperator(null);
    setResult(null);
  };

  const cheakToSetState = (value) => {
    // setOperator
    if (
      typeof value == "string" &&
      value !== "=" &&
      value !== "C" &&
      value !== "."
    ) {
      if (operator == null) {
        if (secondNumber == null) {
          setOperator(value);
        }
      }
    }
    // clearStates when click on C
    else if (value === "C") {
      clearStates();
    }

    // show result when click on =
    else if (value === "=" && secondNumber != null) {
      showResult();
    }
    // setFirstNumber
    else if (operator == null && secondNumber == null) {
      let first = firstNumber;
      first == null && (first = "");

      setFirstNumber(`${first}${value}`);
    }
    // setSecondNumber
    else if (operator != null) {
      let second = secondNumber;
      second == null && (second = "");

      setSecondNumber(`${second}${value}`);
    }
  };

  return (
    <div
      className={`${
        (typeof value == "string") & (value !== ".")
          ? `bg-orange-500 hover:shadow-orange-900 `
          : `bg-slate-200 hover:shadow-slate-900`
      } ${
        value === "=" ? `bg-green-600 w-2/4 hover:shadow-green-900` : `w-16`
      }  rounded-full  h-16 text-lg flex items-center justify-center shadow-md hover:cursor-pointer hover:shadow-lg `}
      onClick={() => cheakToSetState(value)}
    >
      {value}
    </div>
  );
}

export default Button;
