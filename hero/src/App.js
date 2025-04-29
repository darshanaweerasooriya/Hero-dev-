import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/auth/welcome';
import StudentLoging from "./pages/auth/logingStudent";
import TeacherLoging from "./pages/auth/teacher/teacherLogin"; 
import ParentLogin from "./pages/auth/parents/parentLogin";
import ParetnSignup from "./pages/auth/parents/parentSignup";
import ParentEmail from "./pages/auth/parents/parentEmail";
import EmailConfirm from "./pages/auth/parents/parentCofirmCode";
import EConfirm from "./pages/auth/parents/parentForgotPassword";
import ResetPassword from "./pages/auth/parents/parentUpdatePassword";
import Perfomance from "./pages/student/perfomance";
import CreateEvent from "./pages/teacher/createNewEvent"




import StudentHome from "./pages/student/home"
import Layout from "./layouts/layout"
import StudentNotification from "./pages/student/notification"
import Sprofile from "./pages/student/profile"
import Message from "./pages/student/message"
import Sgroup from "./pages/student/studentsGroup"
import MedalsPoints from "./pages/student/medalsPoints"
import StudentsEvent from "./pages/student/events"
import SgroupDetetails from "./pages/student/sGroupDetails"

import Tlayout from "./layouts/teacherLayout"
import Teacherprofile from "./pages/teacher/teacherProfile"
import Teachernoti from "./pages/teacher/teacherNotification"
import TeacherMessage from "./pages/teacher/teacherMessager"
import TeacherGroup from "./pages/teacher/teacherGroup"
import Teacherevent from "./pages/teacher/teacherEnvent"

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
        <Route path="studentNotification" element={<StudentNotification/>} />
        <Route path="studentProfile" element={<Sprofile/>} />
        <Route path="message" element={<Message />} />
        <Route path="studentGroup" element={<Sgroup />} />
        <Route path="meadlPoints" element={<MedalsPoints />}/>
        <Route path="studentsEvent" element={<StudentsEvent />}/>
        <Route path="stduentGDetails" element={<SgroupDetetails/>} />
        
      </Route>
      <Route path ="/" element={<Tlayout />}>
      <Route path="teacherProfile" element={<Teacherprofile />} />
      <Route path="teacherNotification" element={<Teachernoti />} />
      <Route  path="teacherMessage" element={<TeacherMessage />} />
      <Route path="teacherGroup" element={<TeacherGroup />} />
      <Route path="teacherEvent" element={<Teacherevent />} />
      <Route path="createEvent" element={<CreateEvent />}/>

      </Route>
        <Route path="perfomance" element={<performance />} />
        
       
      </Routes>
    </Router>
  );
}

export default App;
