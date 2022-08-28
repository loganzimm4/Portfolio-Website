import './App.css';
import Navbar from './components/Navbar'
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
     <Navbar />
        <Routes>
          <Route path="/"></Route>
        </Routes>
    </div>
  );
}

export default App;
