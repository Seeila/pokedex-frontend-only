import { useColorScheme } from "@mui/material/styles";
import Button from "@mui/material/Button";

const ThemeToggle: React.FC = () => {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      variant="contained"
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
};

export default ThemeToggle;
