const  api = "http://www.omdbapi.com/?s="
import { apikey } from "./const"
export async function obtener_datos ({busqueda}) {
   

   const data = await fetch(api+busqueda+"&"+apikey)
   if(data.ok){
   const j = await data?.json()
   
   if(j.Response =="True"){
   const json = j.Search
   
   //formatear
   
   
   const datos= json.map((d)=>{
     
     return {
         id:d.imdbID,
         name:d.Title,
         year:d.Year,
         img:d.Poster
        }
   })
  

   return datos } }
  
   return null
}
