import "./App.css";
import { Overview, Quiz, Settings, Sidebar, Users } from "./components";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div className="flex flex-row justify-between relative h-full min-h-screen bg-slate-50">
        <Sidebar />
        <Routes>
          {/* Dashboard */}
          <Route path="/" element={<Overview />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
