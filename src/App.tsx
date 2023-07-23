import PieCard from './components/PieCard';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chart" element={<PieCard />} />
      </Routes>
    </>
  )
}


export default App



