import { BrowserRouter, Routes as Router, Route } from "react-router-dom"
import Home from "./pages/Home"
import Upload from "./pages/Upload"

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path='/' element={<Home />} />
        <Route path='/upload' element={<Upload />} />
      </Router>
    </BrowserRouter>
  )
}

export default Routes
