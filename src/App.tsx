import './App.css'
import Register from "./components/Register.tsx";
import Login from "./components/Login.tsx";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";


function App() {
  return (
      <Router>
          <main className="App">
              <Routes>
                  <Route path="/register" element={<Register/>} />
                  <Route path="/" element={<Login/>}/>
              </Routes>
          </main>
      </Router>

  )
}

export default App
