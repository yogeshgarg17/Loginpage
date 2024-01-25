import Login from './components/Login'
import Account from './components/Account'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Sign from './components/Sign';
import Profile from './components/Profile'
function App() {
  return (
    <>
   <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Account" element={<Account/>} />
        <Route path="/Sign" element={<Sign/>} />
        <Route path="/Profile" element={<Profile/>} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
