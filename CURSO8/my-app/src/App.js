import './App.css';
import A from './pages/A';
import B from './pages/B';
import C from './pages/C';
import {BrowserRouter,Navigate,Route,Routes} from "react-router-dom"
import { Error404 } from './pages/Error404';
import Nav from './pages/Nav';
import D from './pages/D';

function App() {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path='/' element={<Navigate to="/" />} />
        <Route path='/pagina1' element={<A/>} />
        <Route path='/pagina2' element={<B/>} />
        <Route path='/pagina3' element={<C/>} />
        <Route path='/pagina4/:letra' element={<D/>} />
        <Route path='*' element={<Error404/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
