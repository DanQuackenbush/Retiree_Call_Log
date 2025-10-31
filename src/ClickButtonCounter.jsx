import { useState } from "react";

export default function ClickButtonCounter() {
  const [count, setCount] = useState(0);

  // Style for the button
  const styleV = {
    paddingLeft: "20px",
    paddingRight: "20px",
    textAlign: "center",
  };

  // Style for the container
  const containerStyle = {
    fontFamily: "Arial",
    color: "black",
    textAlign: "center",
    margin: "50px",
  };

  return (
    <div style={containerStyle}>
      <button
        onClick={() => setCount(count + 1)}
        style={styleV}
      >
        Click me
      </button>
      <p>You clicked {count} times!</p>
    </div>
  );
}
