import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import GlobalStyle from "./styles/global"
import Routes from "./routes/Routes"
import ToastMessage from "./components/ToastMessage"
import Amplify from "aws-amplify"
import { amplifyConfig } from "./config/amplify"

Amplify.configure(amplifyConfig)

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
