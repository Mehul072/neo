import { Route, Routes, useLocation } from 'react-router';
import './App.css';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import ElevatorsPage from './pages/ElevatorsPage';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';

function App() {
  const location = useLocation(); // Get the current route

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/elevators' element={<ElevatorsPage />} />
        <Route path='/contactus' element={<ContactUs />} />
      </Routes>
      {/* Render Footer only if not on the ContactUs page */}
      {location.pathname !== '/contactus' && <Footer />}
    </div>
  );
}

export default App;
