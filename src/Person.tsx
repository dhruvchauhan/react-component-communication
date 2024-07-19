import { useState } from "react";
import PersonDetails from "./PersonDetails";
import { ThemeContext } from "./ThemeContext";

export default function Person() {
  const [name] = useState("John");
  return (
    <ThemeContext.Provider value="dark">
      <PersonDetails name={name} />
    </ThemeContext.Provider>
  );
}
