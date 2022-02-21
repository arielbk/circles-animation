import { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./styles.css";

const Circle = () => {
  const [flipped, setFlipped] = useState(false);
  const styles = useSpring({ translateX: flipped ? 0 : 100 });
  return (
    <animated.div
      style={{
        display: "inline-block",
        borderRadius: "100%",
        border: "1px solid #1F2938",
        width: 20,
        height: 20,
        margin: 0,
        ...styles
      }}
      onClick={() => setFlipped((prev) => !prev)}
    ></animated.div>
  );
};

export default function App() {
  return (
    <div className="App">
      {Array.from({ length: 1000 }).map(() => (
        <Circle />
      ))}
    </div>
  );
}
