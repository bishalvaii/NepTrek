
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GetInTouch from './components/GetInTouch'



import { Route, Routes } from 'react-router-dom';
import AvailableDestinations from './components/TrekkingDetails';
import PopularDestinations from './components/DestinationCard';
import Home from './components/Home';
import TrekkingDetails from './components/TrekkingDetails';
import BookingDetails from './components/BookingDetails';
import Services from './components/Services';
import SearchResults from './components/SearchResults';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';






function App() {

  return (
    <>
    <Navbar/>
      <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<TrekkingDetails  />} />
        <Route path="/book" element={<BookingDetails /> } />
        <Route path="/get-in-touch" element={<GetInTouch />} />
        <Route path="/discover" element={<PopularDestinations />} />
        <Route path="/services" element={<Services />} />
        <Route path="/availableAdventures" element={<SearchResults />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
       
    
    </Routes>
   </>
      
  );
}

export default App;
  