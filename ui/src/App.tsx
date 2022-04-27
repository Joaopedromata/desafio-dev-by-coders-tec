import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import GlobalStyle from "./styles/global"
import Home from "./pages/Home"

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
}

export default App
