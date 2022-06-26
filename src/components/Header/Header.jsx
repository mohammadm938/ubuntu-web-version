import { useEffect, useState } from "react";
import {
  FaPowerOff,
  FaAngleDown,
  FaVolumeUp,
  FaMicrophoneAltSlash,
} from "react-icons/fa";

function Header() {
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval(() => {
      const current = new Date();
      setMonth(current.toString().substring(4, 7));
      setDay(current.getDate());
      setHours(current.getHours());
      setMinutes(current.getMinutes());
      setSeconds(current.getSeconds());
    }, 1000);
  });

  return (
    <header className="bg-black text-sm leading-6 z-10 relative text-slate-200 font-semibold mb-2 flex flex-row justify-between px-2 py-1 items-center">
      <div>
        <span className="">Activities</span>
      </div>
      <div>
        <span>{`${month} ${day}  ${hours}:${minutes}:${seconds}`}</span>
      </div>
      <div className="flex space-x-5 text-sm items-center">
        <div>
          <span className="font-bold text-xs">en</span>
        </div>
        <div className="flex space-x-2 text-sm">
          <FaMicrophoneAltSlash />
          <FaVolumeUp />
          <FaPowerOff />
          <FaAngleDown />
        </div>
      </div>
    </header>
  );
}

export default Header;
