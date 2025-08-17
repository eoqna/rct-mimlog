import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { useTheme } from "./hooks/useTheme";
import Navigations from "./navigation/Navigations";

const App = () => {
  const { isDarkMode } = useTheme();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Navigations />
    </ThemeProvider>
  );
}

export default App;