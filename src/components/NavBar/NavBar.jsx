// import email from "../../img/email.png";
// import folder from "../../img/folder.png";
// import spotify from "../../img/spotify.png";
// import whatsapp from "../../img/whatsapp.png";
import fireFox from "../../img/firefox.png";
import vscode from "../../img/visual-studio.png";
import calculator from "../../img/calculator.png";
import circleMenu from "../../img/circled-menu.png";
import weather from "../../img/partly-cloudy-day.png";

import { SetPageContext } from "../../App";
import { useContext } from "react";

function NavBar() {
  const setPage = useContext(SetPageContext);
  return (
    <nav className="bg-opacity-50 bg-slate-600 w-[80px] h-screen -mt-10 relative flex flex-col justify-between pt-10 pb-2">
      <ul className="flex flex-col items-center justify-center space-y-4 py-1">
        <li className="w-16 p-1 hover:bg-slate-500 rounded-md cursor-pointer">
          <img src={fireFox} onClick={() => setPage("firefox")} alt="" />
        </li>

        <li className="w-16 p-1 hover:bg-slate-500 rounded-md cursor-pointer">
          <img src={vscode} onClick={() => setPage("vscode")} alt="" />
        </li>

        <li className="w-16 p-1 hover:bg-slate-500 rounded-md cursor-pointer">
          <img src={calculator} onClick={() => setPage("calculator")} alt="" />
        </li>

        <li className="w-16 p-1 hover:bg-slate-500 rounded-md cursor-pointer">
          <img src={weather} onClick={() => setPage("weather")} alt="" />
        </li>
      </ul>

      <ul className="flex flex-col items-center justify-center">
        <li className="w-16 hover:bg-slate-500 rounded-md cursor-pointer flex items-center justify-center p-1">
          <img src={circleMenu} alt="" />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
