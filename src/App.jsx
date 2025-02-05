import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Navigation/Home';
import ContactUs from './Navigation/ContactUs';
import Layout from './Navigation/Layout';
import ALert from './Navigation/ALert';
import AboutUs from './Navigation/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/About' element={<AboutUs/>}/>
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<ALert />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;