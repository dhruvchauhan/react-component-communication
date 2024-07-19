import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Basic({
  message,
  sendDataToParent,
}: {
  readonly message: string;
  readonly sendDataToParent: (data: string) => void;
}) {
  const [data, setData] = useState("");
  const theme = useContext(ThemeContext);
  function handleClick() {
    sendDataToParent(data);
  }
  return (
    <div className={"child-container card " + theme}>
      <h4>Child Component</h4>
      <div>Message from parent: {message}</div>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handleClick}>Send to Parent</button>
    </div>
  );
}
