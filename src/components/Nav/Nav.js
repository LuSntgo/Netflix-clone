import {useState, useEffect} from "react";
import "./Nav.css";

export default function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if(window.scrollY > 100){
      handleShow(true);
    } else {
      handleShow(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar)
    return () => window.removeEventListener("scroll", transitionNavBar);
  },[]);

  return (
    <div className="navbar nav_black">
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"
          alt=""
        ></img>
        <img
          className="nav_avatar"
          src="https://i.ibb.co/SPQmNyM/1012c06c7e1b0f8f5e60611992785e5a.png"
          alt=""
        ></img>
      </div>
    </div>
  );
}
