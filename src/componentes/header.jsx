import { debounce } from "../logica/debounce_fuction.js"; //limita la frecuencia de busqueda

export default function Header({refInput,setOrdenar,ordenar,buscar,error}){
  

    return (
        <header className="buscador">
          <h1 className="titulo">Buscador de Peliculas</h1>
            <form className="form" action="#">
              <input ref={refInput} className="form-input" type="text" onChange={debounce(buscar,500) } placeholder="Buscador.." />
              <input id="ordenar" type="checkbox" onChange={()=>{setOrdenar(!ordenar)}} checked={ordenar} /> <label htmlFor="ordenar">Ordenar por año</label>
              <button className="form-btn" type="submit" onClick={buscar}>Buscar</button>
            </form>
           <p className="error">{error!=null ? error : ""}</p>
        </header>
    )
}