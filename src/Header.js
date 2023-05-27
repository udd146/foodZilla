import img from "../images/pngegg.png"
import { useState } from "react"

//here i have created my header part

//first creating logo
const Fwlogo=()=> 
 (<a href="/"><img className="logoimg" alt="logo" src={img} /></a>)
 

//this is my header part
const Header=()=>{
    const [Title,setTitle]=useState("Food villa")
 
     const [i,setI]=useState(0)
   return (
        <div className="header"> 
         <Fwlogo/>
          <div className="nav-bar">
        <ul>
        <li>Home</li>
        <li>Reastraunts</li>
        <li>Help</li>
        <li>Account</li>
        <li>Offers</li>
    </ul>
         </div>
        </div>
        )
    }
export default Header