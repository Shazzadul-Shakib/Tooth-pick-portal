import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Appointment from './components/Appointment/Appointment'
import About from './components/About/About';
import Navbar from './components/Shared/Navbar';
import Login from './components/Authentication/Login';
import Logout from './components/Authentication/Logout';
import Profile from './components/Authentication/Profile';
import Footer from './components/Shared/Footer';
import Signup from './components/Authentication/Signup';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="appointment" element={<Appointment/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="logout" element={<Logout/>}></Route>
        <Route path="signup" element={<Signup/>}></Route>
        <Route path="profile" element={<Profile/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
