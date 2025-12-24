import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import ProjectLois from './Pages/mark-wahlberg'
import ProjectCircuit from './Pages/takeachillpill'
import ProjectDinosaur from './Pages/seth-green'
import IceCream from './Pages/icecreamtierlist'
import ProteinPowder from './Pages/proteinpowdertierlist'
import EnergyDrinks from './Pages/energydrinkstierlist'
import Shhh from './Pages/shhh'
import Fuzzgenes from './Pages/Fuzzgenes'
import Dexterio from './Pages/dexterio'
import Clash from './Pages/clash'
import GuestBook from './Pages/guestbook'
import Projects from './Pages/projects'
console.log(Home, About)
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
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