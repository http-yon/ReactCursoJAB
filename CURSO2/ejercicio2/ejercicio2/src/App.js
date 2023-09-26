import './App.css';
import imagen1 from './imagenes/rey_atanagildo.png'
import imagen2 from "./imagenes/rey_leogivildo.png"
import imagen3 from "./imagenes/rey_sisebuto.png"

import incognito from "./imagenes/rey_incognito.png"


function App() {

  const cambiarImg = (e) => {
    if (e.target.src.includes("incognito")) {
      e.target.style.visibility = "hidden"
    }else{
      e.target.src = incognito
      e.target.parentNode.style.backgroundColor = "white"
    }
  }


  const cambiarTxt = (e) => {
    if (e.target.innerHTML.includes("Visto")) {
      e.target.innerHTML = ""
    } else {
      e.target.innerHTML = "Visto"
    }
  }

  return (
    <div className="parent">
      <div className="div">
        <img onClick={cambiarImg} src={imagen1} alt="noimage" />
        <h2 onClick={cambiarTxt} >atanagildo</h2>
      </div>
      <div className="div">
        <img onClick={cambiarImg} src={imagen2} alt="noimage" />
        <h2 onClick={cambiarTxt}>leogivildo</h2>
      </div>
      <div className="div">
        <img onClick={cambiarImg} src={imagen3} alt="noimage" />
        <h2 onClick={cambiarTxt}>sisebuto</h2>
      </div>
    </div>
  );
}

export default App;
