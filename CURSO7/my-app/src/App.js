import React from "react";
import Pagina1 from "./components/Pagina1";
import "./App.css";
import Colores from "./components/Colores";
import { Datos } from "./contexto/Contexto";
import Pagina2 from "./components/Pagina2";
import Pagina3 from "./components/Pagina3";

const App = () => {
  return (
    <>
      <Datos>
        <div className="App">
          <Pagina1 />
          <Pagina2 />
          <Pagina3 />
        </div>
        <Colores />
      </Datos>
    </>
  );
};

export default App;
