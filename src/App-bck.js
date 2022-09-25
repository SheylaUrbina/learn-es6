import React from "react";
//import { Login, Logout } from "./Login"
import { usuarios } from "./users";

const App = () =>{
    return <div>
        { 
           usuarios.map( (user) => {
            return (
                <div>
                    {<h1>{user.usuario}</h1>}
                    {<p>{user.edad}</p>}
                    {<p>{user.trabajo}</p>}
                </div>
            )
           }) 
           }
         
        
        </div>;
    /*  const names = ['Juan','Clara','Rosa'];
    const peronal = 'Sheyla Urbina'
    const ages = [10,5,25,63,67,8];
    const olderages = ages.filter( age =>{
            return age > 18
    })

    const short = ages.filter(age => age >18)
    const user = ages.find(age => {
        return age == 10
    });

    const usere = {
        name:'Sheyla',
        edad: 36,
        job: 'React Developer'
    }
    const nombre = usere.name;
    const edad = usere.edad;
    const job = usere["job"];*/

    //otra forma
    //const { name: username , edad , job } = usere;      

    /*return (
    <div>
    
       {<h1>{username}</h1> }
       {<h1>{edad}</h1> }
       {<h1>{job}</h1> }
    
    </div>
    );*/


   /* return <div>
    {
        short.map(age => <h1>{age}</h1>)
        /*olderages.map(age => {
            return <h1>{age}</h1>
        })
    }
    </div>*/


    /*return <div>
    {
        names.map(name => {
            return <h1>{name}</h1>
        })
    }
    </div>*/
};
export default App
