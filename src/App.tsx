import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ProjectLois from './pages/ProjectLois'
import ProjectCircuit from './pages/ProjectCircuit'
import ProjectDinosaur from './pages/ProjectDinosaur'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/matrix" element={<ProjectLois />} />
        <Route path="/project/circuit" element={<ProjectCircuit />} />
        <Route path="/project/dinosaur" element={<ProjectDinosaur />} />
      </Routes>
    </Router>
  )
}

export default App