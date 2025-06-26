import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import QuickNote from "./pages/QuickNote";
import PromptedJournal from "./pages/PromptedJournal";
import LongJournal from "./pages/LongJournal";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/quick-notes" element={<QuickNote />} />
      <Route path="/prompted-journal" element={<PromptedJournal />} />
      <Route path="/long-journal" element={<LongJournal />} />
    </Routes>
  );
};

export default App;
