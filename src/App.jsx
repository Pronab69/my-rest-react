

import { Suspense } from 'react'
import './App.css'
import Countries from './component/countries'
import { ErrorBoundary } from 'react-error-boundary'
function App() {

const fetchCountries= fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags")
.then(response=>response.json())

  return (
    <>
    <h1>All countries</h1>
    <ErrorBoundary fallback={<p>errroe</p>}> <Suspense fallback={<p>loading......</p>}>

    <Countries data={fetchCountries}></Countries>

</Suspense></ErrorBoundary>
   
    </>
  )
}

export default App
