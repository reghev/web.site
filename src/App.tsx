import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ProjectLois from './pages/mark-wahlberg'
import ProjectCircuit from './pages/takeachillpill'
import ProjectDinosaur from './pages/seth-green'

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