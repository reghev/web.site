import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ProjectLois from './pages/mark-wahlberg'
import ProjectCircuit from './pages/takeachillpill'
import ProjectDinosaur from './pages/seth-green'
import IceCream from './pages/icecreamtierlist'
import ProteinPowder from './pages/proteinpowdertierlist'
import EnergyDrinks from './pages/energydrinkstierlist'
import Shhh from './pages/shhh'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/pathfinder" element={<ProjectLois />} />
        <Route path="/project/reality" element={<ProjectCircuit />} />
        <Route path="/project/solder" element={<ProjectDinosaur />} />
        <Route path="tl/icecream" element={<IceCream />}/>
        <Route path="tl/protein" element={<ProteinPowder />} />
        <Route path="tl/energydrinks" element={<EnergyDrinks />} />
        <Route path="/shhh" element={<Shhh />} />
      </Routes>
    </Router>
  )
}

export default App