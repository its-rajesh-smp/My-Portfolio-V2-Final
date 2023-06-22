import { useRef } from "react";
import "./HomePage.css";
import useTimeline from "../../Hooks/useTimeline";
function HomePage() {
  const holaRef = useRef();
  const nameRef = useRef();
  const containerRef = useRef();

  useTimeline({ type: "ref", ref: containerRef }, [
    {
      type: "from",
      ref: nameRef,
      animation: { opacity: 0 },
    },
    {
      type: "from",
      ref: holaRef,
      animation: { duration: 2, scale: 5, left: "50%", x: "-50%", delay: 1 },
    },
    {
      type: "to",
      ref: holaRef,
      animation: { duration: 1, scale: 1, delay: 1 },
    },
    {
      type: "to",
      ref: holaRef,
      animation: { duration: 1, left: "0%", x: "0%" },
    },
    {
      type: "to",
      ref: nameRef,
      animation: { opacity: 1 },
    },
  ]);

  return (
    <div className="HomePage">
      <div ref={containerRef} className="TextSection">
        <h2 ref={holaRef}>Hola</h2>
        <h1 ref={nameRef}>Myself Rajesh</h1>
      </div>
    </div>
  );
}

export default HomePage;
