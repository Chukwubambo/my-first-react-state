// //STEP 1 : import the useState from react
// import { useState } from 'react'

// const App = () => {
//   //STEP 2 : create state variable and a function
//   const [nameState, setNameState] = useState("Bolu");
//   const [jobTitleState, setJobTitleState] = useState("upcoming artist");
//   const [locationState, setLocationState] = useState("I came from the gutters");
//   const meetApostle = () => {
//     setNameState("Bolu Cello")
//     setJobTitleState("Super-star")
//     setLocationState("I now live in London")
//   }

//   return (
//     <>
//      <div>
//       <h1>
//       Hello my name is {nameState}, I am a {jobTitleState}, I play the Cello and {locationState}
//       </h1>

//       <button onClick={meetApostle} className='border ring rounded p-1'>Meet Apostle</button>
//     </div>

    
//     </>
   
//   )
// }

// export default App

import React from 'react'
import State from './Component/State'
import Form from './Component/Form'
import Register from './Component/Register'

const App = () => {
  return (
    <div>
      <State />
      <br />
      <br />
      <br />
      <Form />
      <br />
      <br />
      <br />
      <Register />
    </div>
  )
}

export default App

