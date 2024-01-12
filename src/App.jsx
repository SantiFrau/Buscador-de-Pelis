import { useState } from "react"
import "./app.css"
import { Peli } from "./peli.jsx"
import { useObj } from "./useObj.jsx"
import Header from "./header"


export function App(){

  const [ordenar,setOrdenar] = useState(false) //estado para saber si ordenar o no
  const {buscar,objeto,refInput,error}= useObj({ordenar})




 
  return (
    <>
    <Header buscar={buscar} error={error} ordenar={ordenar} refInput={refInput} setOrdenar={setOrdenar}></Header>
   <main className="flex">
     <div className="contenedor">
     {
         objeto.map((d,i) => (
         <Peli d={d} i={i} key={i} ></Peli>
         ))
       
     }
     </div>
   </main>
   </>
  )
}