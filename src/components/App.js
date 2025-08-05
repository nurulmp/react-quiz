import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz.js";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import Users from "./rest-api/Users";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quiz/:id" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
            <Route path="/user" element={<Users />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
