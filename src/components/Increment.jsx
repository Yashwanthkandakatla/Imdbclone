import React, { useState } from 'react'

function Increment() {
 const [text,settext] = useState([])
 const [inputval,setinputval] = useState("")
 function writetodo(e){
    setinputval(e.target.value)
    console.log(e.target.value)
 }

 function addtask(){
    if(inputval!=""){
        settext((prevtask)=>[...prevtask,inputval])
        setinputval("")
        console.log(prevtask)
    }
 }
  return (
    <div>
        <input type='text' value={inputval} onChange={Increment}/>
        <button onClick={addtask}>Add</button>
    </div>
  )
}

export default Increment