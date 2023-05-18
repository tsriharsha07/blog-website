import { Route, BrowserRouter as Router,Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Modal from './components/Modal';


function App() {
  

  return (
    <Router>
      <Home/>
      <Routes>
        <Route path='/:id'  element={<Modal/>}/>
      </Routes>
    </Router>

  );
}

export default App;
