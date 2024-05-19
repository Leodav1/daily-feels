import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DashboardPage } from './components/pages/DashboardPage';
import { JournalPage } from './components/pages/JournalPage';
import { Header } from './components/layout/Header';
import './assets/styles/main.scss';

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/journal" element={<JournalPage />} />
      </Routes>
    </Router>
  );
}

export default App;