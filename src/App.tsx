import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/nav bar/home'
import About from './pages/nav bar/about'
import ProjectLois from './pages/projects/mark-wahlberg'
import ProjectCircuit from './pages/projects/takeachillpill'
import ProjectDinosaur from './pages/projects/seth-green'
import Shhh from './pages/shhh'
import Now from './pages/nav bar/Now'
import Projects from './pages/nav bar/projects'
import Raghavbeer from './pages/projects/raghavdotbeer'
import WHYISTHETVTURNINGOFF from './pages/projects/WHYISTHETVTURNINGOFF'
import ClutchClaudeBot9000 from './pages/projects/ClutchClaudeBot9000'
import Liedetector from './pages/projects/liedetector'
import Photodome from './pages/nav bar/photodome'



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