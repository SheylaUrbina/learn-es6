import React from "react";
import {usuarios} from "./users"




const App = () =>{

    const renderItems = () => {
        return usuarios.map(item => {
            return (
                <div>
                    <h1>{item.usuario}</h1> 
                    <p>{item.trabajo}</p> 
                    <p>{ `${item.edad} años` }</p> 
                </div>
            )
        })
    }


    return (usuarios.length ===0 ? <div>No hay datos a mostrar</div>:renderItems())
  
};
export default App
