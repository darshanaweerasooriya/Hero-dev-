import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/auth/welcome';
import StudentLoging from "./pages/auth/logingStudent";
import TeacherLoging from "./pages/auth/teacher/teacherLogin"; // Ensure correct import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="loginStudent" element={<StudentLoging />} />
        <Route path="loginTeachers" element={<TeacherLoging />} />  {/* Fixed spelling */}
      </Routes>
    </Router>
  );
}

export default App;
