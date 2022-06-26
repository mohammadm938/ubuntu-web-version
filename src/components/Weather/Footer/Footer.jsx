import { FaHeart, FaCoffee } from "react-icons/fa";
function Footer() {
  return (
    <footer>
      <p className="flex flex-row justify-center items-center ">
        Create By {<FaHeart className="text-red-600" />} and{" "}
        {<FaCoffee className="text-br" />}
      </p>
    </footer>
  );
}

export default Footer;
