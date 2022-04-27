import { BrowserRouter, Routes as Router, Route } from "react-router-dom"
import Home from "./pages/Home"
import Report from "./pages/Report"
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
          <Route path='/report' element={<Report />} />
        </Router>
      </FinanceState>
    </BrowserRouter>
  )
}

export default Routes
