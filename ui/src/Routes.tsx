import { BrowserRouter, Routes as Router, Route } from "react-router-dom"
import Home from "./pages/Home"
import Upload from "./pages/Upload"
import UploadResult from "./pages/UploadResult"
import FinanceState from "./states/Finances/FinancesState"

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <FinanceState>
        <Router>
          <Route path='/' element={<Home />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/upload/result' element={<UploadResult />} />
        </Router>
      </FinanceState>
    </BrowserRouter>
  )
}

export default Routes
