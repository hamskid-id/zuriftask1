import './App.css';
import { Contact } from './pages/contact';
import { Home } from './pages/home';
import { HashRouter as Router, Routes, Route, } from 'react-router-dom';

function App() {
  
  
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={ <Home/> }/>
        <Route exact path='/contact' element={ <Contact/> }/>
      </Routes>
    </Router>
  );
}

export default App;
