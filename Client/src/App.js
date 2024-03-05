
import {Login} from "./Pages/Signin/Login";
import { Routes, Route } from 'react-router-dom';
import UserModeSelection from "./Pages/UserModeSelection";
import {Transporter} from "./Pages/Transporter";
function App() {
  return (
    <div className="App">

      <Routes>
       <Route path="/"  element={<Login/>} />
      <Route path="/user-mode" element={<UserModeSelection/>} />
      <Route path="/transporter" element={<Transporter/>} />
      </Routes>
    </div>
  );
}

export default App;
