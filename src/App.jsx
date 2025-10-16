import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import EventDetail from './pages/EventDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/events/:eventId" element={<EventDetail />} />
    </Routes>
  );
}

export default App;
