import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Appointment from './components/Appointment/Appointment'
import About from './components/About/About';
import Navbar from './components/Shared/Navbar';
import Login from './components/Authentication/Login';
import Logout from './components/Authentication/Logout';
import Footer from './components/Shared/Footer';
import Signup from './components/Authentication/Signup';
import Yourappointment from './components/Authentication/Yourappointment';
import Notfound from './components/Shared/Notfound';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './firebase.init'
import RequireAuth from './components/RequireAuth';
function App() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
 
  return (
    <div className="App">
      <Navbar user={user} loading={loading} error={error} signInWithGoogle={signInWithGoogle} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="appointment" element={
          <RequireAuth>
            <Appointment/>
          </RequireAuth>
        }></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="login" element={<Login user={user} loading={loading} error={error} signInWithGoogle={signInWithGoogle} />}></Route>
        <Route path="logout" element={<Logout/>}></Route>
        <Route path="signup" element={<Signup/>}></Route>
        <Route path="yourappointment" element={<Yourappointment/>}></Route>
        <Route path="*" element={<Notfound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
