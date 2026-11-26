import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import ProjectLois from './pages/mark-wahlberg'
import ProjectCircuit from './pages/takeachillpill'
import ProjectDinosaur from './pages/seth-green'
import Shhh from './pages/shhh'
import Now from './pages/Now'
import Projects from './pages/projects'
import Raghavbeer from './pages/raghavdotbeer'
import WHYISTHETVTURNINGOFF from './pages/WHYISTHETVTURNINGOFF'
import ClutchClaudeBot9000 from './pages/ClutchClaudeBot9000'
import Liedetector from './pages/liedetector'
import Photodome from './pages/photodome'



function App() {
  return (
    <Router>
      <Routes>
        //routes are dumb
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/pathfinder" element={<ProjectLois />} />
        <Route path="/project/reality" element={<ProjectCircuit />} />
        <Route path="/project/solder" element={<ProjectDinosaur />} />
        <Route path="/shhh" element={<Shhh />} />
        <Route path="/now" element={<Now />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/raghavdotbeer" element={<Raghavbeer />} />
        <Route path="/project/WHYISTHETVTURNINGOFF" element={<WHYISTHETVTURNINGOFF />} />
        <Route path="/project/ClutchClaudeBot9000" element={<ClutchClaudeBot9000 />} />
        <Route path="/project/liedetector" element={<Liedetector />} />
        <Route path="/photodome" element={<Photodome />} />
      </Routes>
    </Router>
  )
}

export default App