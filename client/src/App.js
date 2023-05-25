import './App.css';
import Inicio from './components/Inicio'
import {Route, Routes} from 'react-router'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Inicio></Inicio>}/>
      </Routes>
    </div>
  );
}

export default App;
