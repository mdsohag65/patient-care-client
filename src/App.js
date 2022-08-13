import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appoinment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyAppointment from './Pages/DashBoard/MyAppointment';
import MyReview from './Pages/DashBoard/MyReview';
import MyHistory from './Pages/DashBoard/MyHistory';
import Users from './Pages/DashBoard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctor from './Pages/DashBoard/AddDoctor';
import ManageDoctors from './Pages/DashBoard/ManageDoctors';
import Payment from './Pages/DashBoard/Payment';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='appointment' element={<RequireAuth>
          <Appointment />
        </RequireAuth>}></Route>
        <Route path='dashboard' element={<RequireAuth>
          <DashBoard />
        </RequireAuth>}>
          <Route index element={<MyAppointment />}></Route>
          <Route path='review' element={<MyReview />}></Route>
          <Route path='history' element={<MyHistory />}></Route>
          <Route path='payment/:id' element={<Payment />}></Route>
          <Route path='users' element={
            <RequireAdmin>
              <Users />
            </RequireAdmin>
          }></Route>
          <Route path='addDoctor' element={
            <RequireAdmin>
              <AddDoctor />
            </RequireAdmin>
          }></Route>
          <Route path='manageDoctors' element={
            <RequireAdmin>
              <ManageDoctors />
            </RequireAdmin>
          }></Route>
        </Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='signup' element={<SignUp />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
