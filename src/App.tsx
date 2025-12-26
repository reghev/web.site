import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import ProjectLois from './pages/mark-wahlberg'
import ProjectCircuit from './pages/takeachillpill'
import ProjectDinosaur from './pages/seth-green'
import IceCream from './pages/icecreamtierlist'
import ProteinPowder from './pages/proteinpowdertierlist'
import EnergyDrinks from './pages/energydrinkstierlist'
import Shhh from './pages/shhh'
import Fuzzgenes from './pages/Fuzzgenes'
import Dexterio from './pages/dexterio'
import Clash from './pages/clash'
import GuestBook from './pages/guestbook'
import Projects from './pages/projects'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/pathfinder" element={<ProjectLois />} />
        <Route path="/project/reality" element={<ProjectCircuit />} />
        <Route path="/project/solder" element={<ProjectDinosaur />} />
        <Route path="tl/icecream" element={<IceCream />} />
        <Route path="tl/protein" element={<ProteinPowder />} />
        <Route path="tl/energydrinks" element={<EnergyDrinks />} />
        <Route path="/shhh" element={<Shhh />} />
        <Route path="/fuzzgenes" element={<Fuzzgenes />} />
        <Route path="/dexterio" element={<Dexterio />} />
        <Route path="/clash" element={<Clash />} />
        <Route path="/guestbook" element={<GuestBook />} />
        <Route path="/projects" element={<Projects />} />        
      </Routes>
    </Router>
  )
}

export default App