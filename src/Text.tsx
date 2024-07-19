import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function Text() {
  const { text, setText } = useContext(AppContext);

  return (
    <div>
      <h3>{text}</h3>
      <button onClick={() => setText("Hello, React!")}>Click {text}</button>
    </div>
  );
}
