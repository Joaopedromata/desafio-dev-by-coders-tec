import { BrowserRouter, Routes as Router, Route } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Report from "../pages/Report"
import Upload from "../pages/Upload"
import UploadResult from "../pages/UploadResult"
import AuthState from "../states/Auth/AuthState"
import FinanceState from "../states/Finances/FinancesState"

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthState>
        <FinanceState>
          <Router>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/upload' element={<Upload />} />
            <Route path='/upload/result' element={<UploadResult />} />
            <Route path='/report' element={<Report />} />
          </Router>
        </FinanceState>
      </AuthState>
    </BrowserRouter>
  )
}

export default Routes
