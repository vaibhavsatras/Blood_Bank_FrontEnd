import './App.css';
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/homePage';
import SignUp from './pages/auth/signUp';
import SignIn from './pages/auth/signIn';
import About from './pages/about';
import Hospital from './pages/hospital';
import Organization from './pages/organization';
import Donation from './pages/donation';
import Consumer from './pages/consumer';
import Analytics from './pages/analytics';
import AdminHome from './admin/adminHome';
import AdminDonar from './admin/adminDonar';
import AdminHospital from './admin/adminHospital';
import AdminOrganization from './admin/adminOrganization';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/signUp' element={<SignUp/>} />
        <Route path='/signIn' element={<SignIn/>} />
        <Route path='/donar' element={<About/>} />
        <Route path='/hospital' element={<Hospital/>} />
        <Route path='/organization' element={<Organization/>} />
        <Route path='/donation' element={<Donation/>} />
        <Route path='/consumer' element={<Consumer/>} />
        <Route path='/analytics' element={<Analytics/>} />
        <Route path='/adminHome' element={<AdminHome/>} />
        <Route path='/adminDonar' element={<AdminDonar/>} />
        <Route path='/adminHospital' element={<AdminHospital/>}/>
        <Route path='/adminOrgnization' element={<AdminOrganization/>}/>
      </Routes>
    </>
  );
}

export default App;
