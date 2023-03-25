

import './App.css';
import SideBar from './SideBar';
import Home from './Home';
import Stats from './Stats';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Tutorial from './Tutorial';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <SideBar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/stats" element={<Stats/>}/>
        <Route path="/tutorial" element={<Tutorial/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
