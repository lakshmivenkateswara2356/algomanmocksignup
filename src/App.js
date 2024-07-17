import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path ="/" element = {<LoginPage/>}/>
          <Route exact path="signuppage" element={<SignupPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
