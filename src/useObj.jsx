import { useState,useRef, useMemo} from "react"
import { obtener_datos } from "./fetch"

export const useObj= ({ordenar})=>{ 

    
    const [objeto , setobj] = useState([]) //estado de la lista de pelis
    const [error,setError] = useState(null) //estado del error
    
    const refInput = useRef() //referencia al input
    const busquedaAnterior = useRef(null) //valor de la busqueda anterior para no repetir


    //funcion para buscar y actualizar el estado

    const buscar  = async (e)=>{
       
      e.PreventDefault;

      //prevenir busquedas dobles
       if(busquedaAnterior.current==refInput.current.value){ return }

     //detectando si la busqueda es menor a 3 caracteres
      if(refInput.current.value.length<3){
         setError("Minimo 3 caracteres")
         setobj([])
         return
      }
      //si pasa las validaciones se hace el fetch
      
       const datos =  await obtener_datos({busqueda:refInput.current.value.toLowerCase()})

       //valida si encuentra los datos
       if(datos==null){
         setError("No encontrado")
         setobj([])
         return
       }

     
       setobj(datos)
       setError(null)
       busquedaAnterior.current=refInput.current.value

       //si se hace click en buscar  se resetea el input
       if(e.type == "click"){
       refInput.current.value=""
       }
       
    }


  //ordenando por año segun el estado de ordenar
   
    const datos_ordenados = useMemo(()=>{ 
    return ordenar ? [...objeto].sort((a,b)=>{return a.year-b.year}) :
        [...objeto]},[ordenar,objeto])
    
    
    //retornando la funcion buscar , lsta de pelis (ordenadas o no) , referencia al input para asignarsela en donde se encuentra , error
    return {buscar,objeto:datos_ordenados,refInput,error}
  }