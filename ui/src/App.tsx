import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import GlobalStyle from "./styles/global"
import Routes from "./Routes"
import ToastMessage from "./components/ToastMessage"
import FinanceState from "./states/Finances/FinancesState"

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastMessage />
      <FinanceState>
        <Routes />
      </FinanceState>
    </ThemeProvider>
  )
}

export default App
