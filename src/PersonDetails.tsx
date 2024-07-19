import { useContext } from "react";
import Button from "./Button";
import { ThemeContext } from "./ThemeContext";

export function PersonDetails({ name }) {
  const theme = useContext(ThemeContext);
  return (
      <div className={"card " + theme}>
        Hi, I am {name}.
        <Button
          theme={theme}
          onClick={() => {
            console.log(theme);
          }}
        />
      </div>
  );
}

export default PersonDetails;