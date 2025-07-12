import { Suspense, use } from "react";
import Shoowcountry from "./countries/shoowcountry";


const Countries = ({data}) => {

const countrisapi=use(data)
console.log(countrisapi)

    return (
        <div className="parentofcard">
           

{countrisapi.map((country,index)=><Shoowcountry key={index}  country={country}></Shoowcountry>)}

        </div>
    );
};

export default Countries;