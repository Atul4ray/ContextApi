import React, { useContext } from 'react'
import { Data } from '../contextApi/Context'


function Info() {
const get = useContext(Data)
  return (
<>

    <h2> Hello my name is {get.name}</h2>
    <h2> i leave in {get.add}</h2>
    <h2> i'm working as a {get.profile}</h2>

</>    
  )
}

export default Info