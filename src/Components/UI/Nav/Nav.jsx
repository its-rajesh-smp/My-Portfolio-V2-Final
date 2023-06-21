import { useRef } from "react";
import useReveal from "../../../Hooks/useReveal";
import "./Nav.css";
function Nav() {
  const containerRef = useRef();

  useReveal(
    { type: "class", ref: ".Nav_p" },
    { type: "ref", ref: containerRef },
    {
      delay: 2,
      translateY: "-100px",
      translateX: "200px",
      duration: 2.5,
      stagger: 0.1,
      ease: "elastic.out(1, 0.3)",
    },
    {
      delay: 2,
      translateY: "0px",
      translateX: "0px",
      duration: 2.5,
      stagger: 0.1,
      ease: "elastic.out(1, 0.3)",
    }
  );

  return (
    <div ref={containerRef} className="Nav">
      <p className="Nav_p">Home</p>
      <p className="Nav_p">Skills</p>
      <p className="Nav_p">Projects</p>
      <p className="Nav_p">Social</p>
    </div>
  );
}

export default Nav;
