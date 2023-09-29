import React, { useContext } from "react";
import { Contexto } from "../contexto/Contexto";

const Pagina1 = () => {
  const { color } = useContext(Contexto);
  return (
    <div className="hijo" style={{backgroundColor:color}}>
      <h2> pagina1 </h2>
    </div>
  );
};

export default Pagina1;
