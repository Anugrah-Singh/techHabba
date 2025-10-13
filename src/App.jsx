import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutAcharya from './pages/AboutAcharya';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-acharya" element={<AboutAcharya />} />
    </Routes>
  );
}

export default App;
