import { useContext } from "react";
import Calculator from "../Calculator/Calculator";
import MainPageFireFox from "../FireFox/MainPageFireFox/MainPageFireFox";
import Vscode from "../Vscode/Vscode";
import { PageContext } from "../../App";

const cheakComponentForReturnIt = (page) => {
  switch (page) {
    case "main":
      return console.log("Mainnnnn");
    case "firefox":
      console.log("FireFox");
      return <MainPageFireFox />;
    case "calculator":
      console.log("Calculator");
      return <Calculator />;
    case "vscode":
      console.log("vscode");
      return <Vscode />;
    default:
      break;
  }
};
function AppShow() {
  const page = useContext(PageContext);
  return cheakComponentForReturnIt(page);
}

export default AppShow;
