import { useContext, useState } from "react";
import { data, Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContent";
import { useSelector } from "react-redux";
import { FaCartPlus } from "react-icons/fa6";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { LoggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store)=> store.cart.items);

  return (
    <div className="flex justify-between sticky top-0 bg-pink-100 shadow-lg">
      <div className="m-1 p-1">
        <Link to="/">
          <img
            className="w-[100px] "
            src="https://tse4.mm.bing.net/th?id=OIP.0jwf9jH34clp6-pS7b6TVgHaGe&pid=Api&P=0&h=180"
          />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex  items-center">
          <li className="p-4">
            {onlineStatus ? "Online Status : 🟢" : "Online Status : 🔴"}
          </li>
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/about">About</Link>
          </li>
          {/* <li className="p-4">
            <Link to="/contact">Conatct</Link>
          </li> */}
          <li className="p-4 ">
            <Link to="/cart">🛒 {cartItems.length}</Link></li>
          <button
            className="p-4 border border-solid border-black rounded-lg py-1"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="p-4">{LoggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
