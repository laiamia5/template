import { useEffect } from 'react';
import './App.css';
import Inicio from './components/Inicio'
import {Route, Routes} from 'react-router'
import { useSelector , useDispatch} from 'react-redux'
import { obtenerProductos } from './redux/actions';


function App() {
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(obtenerProductos())//recorda que esta pagionadoooooo!!!!
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Inicio></Inicio>}/>
      </Routes>
    </div>
  );
}

export default App;
