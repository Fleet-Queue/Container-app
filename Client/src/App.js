
import {Login} from "./Pages/Signin/Login";
import { Routes, Route } from 'react-router-dom';
import UserModeSelection from "./Pages/UserModeSelection";
function App() {
  return (
    <div className="App">
      <Routes>


     
       <Route path="/"  element={<Login/>} />
      <Route path="/user-mode" element={<UserModeSelection/>} />
      </Routes>
    </div>
  );
}

export default App;
