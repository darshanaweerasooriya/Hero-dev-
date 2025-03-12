import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/auth/welcome';
import StudentLoging from "./pages/auth/logingStudent";
import TeacherLoging from "./pages/auth/teacher/teacherLogin"; // Ensure correct import
import ParentLogin from "./pages/auth/parents/parentLogin";
import ParetnSignup from "./pages/auth/parents/parentSignup";
import ParentEmail from "./pages/auth/parents/parentEmail";
import EmailConfirm from "./pages/auth/parents/parentCofirmCode";
import EConfirm from "./pages/auth/parents/parentForgotPassword";
import ResetPassword from "./pages/auth/parents/parentUpdatePassword";

import StudentHome from "./pages/student/home"
import Layout from "./layouts/layout"

function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="loginStudent" element={<StudentLoging />} />
        <Route path="loginTeachers" element={<TeacherLoging />} />
        <Route path="loginParent" element={<ParentLogin />} />
        <Route path="signupParent" element={<ParetnSignup />} />
        <Route path="parentsEmail" element={<ParentEmail />} />
        <Route path="emailConfirm" element={<EmailConfirm />} />
        <Route path="confirm" element={<EConfirm />} />
        <Route path="resetPassword" element={<ResetPassword />} />
        {/* <Route path="logoBar" element={<LogoBar />} />
        <Route path="sideBar" element={<SideBar />} /> */}
      <Route path ="/" element={<Layout />}>
      <Route path="studentHome" element={<StudentHome />} />
      </Route>
      </Routes>
    </Router>
  );
}

export default App;
