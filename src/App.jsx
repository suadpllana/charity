import Charity from "./Charity"
import Nav from "./Nav"
import {useState } from "react"
function App() {
  const [category, setCategory] = useState("health")

  return (
    <>
    <Nav   setCategory={setCategory}/>
     <Charity category={category} />
    </>
  )
}

export default App
