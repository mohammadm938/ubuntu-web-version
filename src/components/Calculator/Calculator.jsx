import HeaderApp from "../Header/HeaderApp";
import Screen from "./Screen/Screen";
import ButtonBox from "./ButtonBox/ButtonBox";
import { createContext, useState } from "react";

export const FirstNumberContext = createContext();
export const SecondNumberContext = createContext();
export const OperatorContext = createContext();
export const SetFirstNumberContext = createContext();
export const SetSecondNumberContext = createContext();
export const SetOperatorContext = createContext();

export const Result = createContext();
export const SetResult = createContext();

function Calculator() {
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  const [result, setReult] = useState(null);

  return (
    <Result.Provider value={result}>
      <SetResult.Provider value={setReult}>
        <FirstNumberContext.Provider value={firstNumber}>
          <SecondNumberContext.Provider value={secondNumber}>
            <OperatorContext.Provider value={operator}>
              <SetFirstNumberContext.Provider value={setFirstNumber}>
                <SetSecondNumberContext.Provider value={setSecondNumber}>
                  <SetOperatorContext.Provider value={setOperator}>
                    <div className="flex w-11/12 items-center justify-center">
                      <div className="w-3/12 h-4/6 bg-slate-800 rounded-md p-1">
                        <HeaderApp name="Calculator" />
                        <Screen />
                        <ButtonBox />
                      </div>
                    </div>
                  </SetOperatorContext.Provider>
                </SetSecondNumberContext.Provider>
              </SetFirstNumberContext.Provider>
            </OperatorContext.Provider>
          </SecondNumberContext.Provider>
        </FirstNumberContext.Provider>
      </SetResult.Provider>
    </Result.Provider>
  );
}

export default Calculator;
