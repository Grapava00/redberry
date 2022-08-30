import Landing from "./pages/landing/Landing.jsx"
import Workmate from "./pages/workmate/Workmate.jsx"
import Computer from "./pages/computer/Computer.jsx"
import './app.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App__components">
          <Routes>
            <Route index element={<Landing />}/>
          </Routes>
          <Routes>
            <Route path='Workmate' element={<Workmate />}/>
          </Routes>
          <Routes>
            <Route path='Computer' element={<Computer />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
