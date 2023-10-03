import './App.css';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom"
import All from './pages/All';
import Nav from './pages/Nav';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<All />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
