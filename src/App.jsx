import { Routes, Route } from 'react-router-dom';
import ResumeHome from '../src/pages/ResumeHome';
import ResumeEditor from '../src/pages/ResumeEditor';
import Login from '../src/pages/Login';
import SignUp from '../src/pages/SignUp';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ResumeHome />} />
      <Route path="/editor" element={<ResumeEditor />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}