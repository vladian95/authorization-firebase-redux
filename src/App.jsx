import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import { Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path="/" element={HomePage} />
      <Route path="/login" element={LoginPage} />
      <Route path="/register" element={RegisterPage} />
    </Router>
  );
}

export default App;
