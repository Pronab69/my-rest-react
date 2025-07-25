import React, { useState } from 'react';

const Shoowcountry = ({country,visitedcountries}) => {

    
    const [visit,setVsit]=useState(false)

    const visitf=()=>{
setVsit(!visit)
visitedcountries(country)
    }
    return (
        <> 
      
         <div className={`card ${visit&& 'car'}`} >
            <h4>{country.name.common}</h4>
            <img src={country.flags.png} alt="" />
            <button onClick={visitf}>{visit?"visited":"notvisited"}</button>
        </div></>
      
    );
};

export default Shoowcountry;