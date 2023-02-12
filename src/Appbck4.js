import React from "react";
import {usuarios} from "./users"




const App = () =>{

    //const user = usuarios.find(item => item.edad === 30);
    //clonar un usuario
    //const newUser = {...user}
    //clonar un arreglo
    const newUsers = [...usuarios]

    //return <div>{newUser.edad}</div>;
    return <div>{ newUsers[0].edad }</div>;
};
export default App
