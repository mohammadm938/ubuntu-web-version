import { useContext } from "react";
import {
  FirstNumberContext,
  SecondNumberContext,
  OperatorContext,
  Result,
} from "../Calculator";
function Screen() {
  const firstNumber = useContext(FirstNumberContext);
  const secondNumber = useContext(SecondNumberContext);
  const operator = useContext(OperatorContext);
  const result = useContext(Result);

  // operator
  let op = operator;

  //  first number
  let fir = firstNumber;

  // second number
  let sec = secondNumber;

  op == null && (op = "");
  fir == null && (fir = "");
  sec == null && (sec = "");

  return (
    <div className="relative bg-slate-300 h-24 p-2">
      <span className="text-2xl font-bold absolute bottom-2 left-2">
        {result != null ? result : `${fir} ${op} ${sec}`}
      </span>
    </div>
  );
}

export default Screen;
