import { useRef } from "react";
import Nav from "../Nav/Nav";
import "./Header.css";
import useReveal from "../../../Hooks/useReveal";

function Header() {
  const headerRef = useRef();
  const nameRef = useRef();

  // Reveal For Text
  useReveal(
    { type: "ref", ref: nameRef },
    { type: "ref", ref: headerRef },
    {
      delay: 2,
      translateY: "-100px",
      translateX: "-200px",
      duration: 0.5,
      ease: "back.out(1.7)",
    },
    {
      delay: 2,
      translateY: "0px",
      translateX: "0px",
      duration: 0.5,
      ease: "back.out(1.7)",
    }
  );

  // Reveal For Header
  useReveal(
    { type: "ref", ref: headerRef },
    { type: "class", ref: ".App" },
    {
      delay: 1,
      translateX: "-100vw",
      duration: 0.5,
    },
    {
      delay: 1,
      translateX: "0px",
      duration: 0.3,
    }
  );

  return (
    <div ref={headerRef} className="Header">
      <h1 ref={nameRef}>Rajesh</h1>
      <Nav />
    </div>
  );
}

export default Header;
