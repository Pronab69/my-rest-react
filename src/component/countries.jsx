import { Suspense, use, useState } from "react";
import Shoowcountry from "./countries/shoowcountry";


const Countries = ({data}) => {

    const [visited,setVisited]=useState([])


    const visitedcountries=(country)=>{
const newvisited=[...visited , country]
setVisited(newvisited)
    }

const countrisapi=use(data)
console.log(visited)

    return (
    <div>
<h1>All countries: {countrisapi.length}</h1>
  <h4>total visited: {visited.length}</h4>
  <ul className="myul" >
 {visited.map(country=> <li >{country.name.common} <img src= {country.flags.png} alt="" /></li>
   
 )}
  </ul>
          <div className="parentofcard">
           

{countrisapi.map((country,index)=><Shoowcountry visitedcountries={visitedcountries} key={index}  country={country}></Shoowcountry>)}

        </div>  
    </div>
    
    );
};

export default Countries;