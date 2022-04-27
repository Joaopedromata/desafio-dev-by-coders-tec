import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import GlobalStyle from "./styles/global"
import Routes from "./Routes"
import ToastMessage from "./components/ToastMessage"

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastMessage />
      <Routes />
    </ThemeProvider>
  )
}

export default App
