import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpForm from "./features/auth/components/signUpForm";
import LoginForm from "./features/auth/components/logInForm";

// Components for the routes
const Home = () => <h1>Home Page</h1>;

function App() {
  return (
    <Router>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/log-in" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
