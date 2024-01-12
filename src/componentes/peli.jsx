export const Peli =({i,d})=>{

return   (<div className="contenedor-obj" key={i}>
          <img className="contenedor-img" src={d.img} alt="" />
          <p id="name">{d.name.toUpperCase()}</p>
          <p id="year">{d.year}</p>
         </div>)
}