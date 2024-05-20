import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Journal from "./components/pages/journal";
import { Header } from "./components/layout/Header";
import "./assets/styles/main.scss";
import Asistant from "./components/pages/assistant";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/asistant" element={<Asistant />} />
      </Routes>
    </Router>
  );
}

export default App;
