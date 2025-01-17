import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';

function App() {
  const auth=localStorage.getItem('access_token');
  return (
  <Router>
      <Routes>
        <Route path='/' element={!auth?<Login/>:<Navigate to='/dashboard' replace/>}/>
        <Route path='/dashboard' element={auth?(<Dashboard/>):<Navigate to='/' replace/>}/>
      </Routes> 
  </Router>
   
  
  );
}
 
export default App;
