import { useEffect, useState } from "react";

import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setbtnNameReact] = useState("Login");
  const isOnline = useOnlineStatus();
  return (
    <div className="flex justify-between shadow-lg p-4">
      <div className="logo-container">
        <img className="w-20" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="">
        <ul className="flex items-center font-bold ">
          <li className="mr-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-4">
            <Link to="/about">About</Link>
          </li>
          <li className="mr-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mr-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="mr-4">
            {isOnline ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 20h.01"></path>
                <path d="M2 8.82a15 15 0 0 1 20 0"></path>
                <path d="M5 12.859a10 10 0 0 1 14 0"></path>
                <path d="M8.5 16.429a5 5 0 0 1 7 0"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 20h.01"></path>
                <path d="M8.5 16.429a5 5 0 0 1 7 0"></path>
                <path d="M5 12.859a10 10 0 0 1 5.17-2.69"></path>
                <path d="M19 12.859a10 10 0 0 0-2.007-1.523"></path>
                <path d="M2 8.82a15 15 0 0 1 4.177-2.643"></path>
                <path d="M22 8.82a15 15 0 0 0-11.288-3.764"></path>
                <path d="m2 2 20 20"></path>
              </svg>
            )}
          </li>
          <button
            className="cursor-pointer"
            onClick={() => {
              btnName === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
