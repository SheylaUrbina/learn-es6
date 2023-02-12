import React from "react";
import {usuarios} from "./users"




const App = () =>{

    const renderItems = () => {
        return usuarios.map(item => {
          return (
            <div>
                <h1>{item.trabajo}</h1>
                <p>{item.usuario}</p>
                <p>{`${item.edad} años de edad.`}</p>
            </div>
          )  
        })
    } 
    return(
        usuarios.length === 0 ? <div>No se encontraron usuarios</div>: renderItems()
    )
};
export default App