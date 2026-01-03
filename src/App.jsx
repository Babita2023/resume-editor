import { Routes, Route } from 'react-router-dom';
import ResumeHome from './components/pages/ResumeHome';
import ResumeEditor from './components/pages/ResumeEditor';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ResumeHome />} />
      <Route path="/editor" element={<ResumeEditor />} />
    </Routes>
  );
}