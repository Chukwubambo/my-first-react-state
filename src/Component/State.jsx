import { useState } from 'react'

const State = () => {

    const [nameState, setNameState] = useState("Mr Bambo");
    const [jobWorkState, setJobWorkState] = useState("Cocoa farm");
    const [familyState, setFamilyState] = useState("1 wife and 2 kids.");
    const coronation = () => {
        setNameState("Prince Bambo")
        setJobWorkState("run a City")
        setFamilyState("4 wives and 25 kids.")
    }

  return (
   <>
    <div>
      <h1>
        I am {nameState}, I run a {jobWorkState}, I have {familyState} 
      </h1>

      <button onClick={coronation} className='border ring rounded p-1'>Coronation</button>
    </div>
   </>
  )
}

export default State
