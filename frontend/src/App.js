import "./App.css";

// Components
import Sidebar from "./Components/Sidebar/Sidebar";
import Topbar from "./Components/Topbar/Topbar";

// Pages
import Home from "./Pages/Home/Home";
import User from "./Pages/User/User";
import Mentor from "./Pages/Mentor/Mentor";
import Feedback from "./Pages/Feedback/Feedback";
import Login from "./login/Login";
import Register from "./register/MultiStep";
// Router
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Rightbar from "./Components/Rightbar/Rightbar";
const url_split = (''+window.location).split('/');
const ActivePage = url_split[url_split.length-1];

function App() {
  if(ActivePage !== "login"){
    const LoginPage = true;
    }
    
  return (
    <>
        <Router className="App">
          <header className="App-header"></header>
        
            <Routes>
            <Route path="/login"element={ <Login /> } />
            <Route path="/register"element={ <Register /> } />
            </Routes>
            {/* <Topbar /> */}
          
            {/* <Sidebar /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user" element={<User />} />
              <Route path="/mentor" element={<Mentor />} />
              <Route path="/feedback" element={<Feedback />} />
            </Routes>
         
        </Router>
      
    </>
  );
}

export default App;
