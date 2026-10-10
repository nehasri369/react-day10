import React, { useState } from 'react'
import "./classname.css"
const App = () => {

const[click,setClick] = useState(false);
const[type,setType] = useState("")

let clicking = () => {
  setClick(!click)
  
}


  return (
    <div>
      <button onClick={clicking}  className={click?"error":"success"}>{click ? "InActive": "Active"}</button>
    </div>
  )
}

export default App






















