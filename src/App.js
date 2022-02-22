import { useState, useLayoutEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./styles.css";

const Circle = ({ mouse }) => {
  const styles = useSpring({
    translate3d: [-mouse[0] / 100, -mouse[1] / 100, 0]
  });
  const styles2 = useSpring({
    translate3d: [mouse[0] / 100, mouse[1] / 100, 0]
  });
  return (
    <div style={{ position: "relative", width: 20, height: 20 }}>
      <animated.div
        style={{
          borderRadius: "100%",
          background: "red",
          opacity: 0.5,
          width: "100%",
          height: "100%",
          ...styles
        }}
      />
      <animated.div
        style={{
          borderRadius: "100%",
          background: "blue",
          opacity: 0.5,
          width: "100%",
          height: "100%",
          ...styles2
        }}
      />
    </div>
  );
};

export default function Container() {
  const [mouse, setMouse] = useState([0, 0]);
  useLayoutEffect(() => {
    const recordMousePosition = (e) => {
      setMouse([e.x, e.y]);
    };
    document.addEventListener("mousemove", recordMousePosition);
    return () => document.removeEventListener("mousemove", recordMousePosition);
  }, []);

  return (
    <div style={{ height: "100%" }}>
      <div className="App" style={{ width: 20 * 10 }}>
        {Array.from({ length: 100 }).map((_, i) => (
          <Circle mouse={mouse} key={i} />
        ))}
      </div>
    </div>
  );
}
