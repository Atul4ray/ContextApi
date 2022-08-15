import React, { createContext } from 'react'
const Data = createContext()

const Context = ({children}) => {

   const Obj = {
        name: "atul ray",
        add : "Gurgaon",
        profile : "Software Engineer"
    }

  return (
    <Data.Provider value={Obj}>
    {children}
    </Data.Provider>
  )
}

export default Context
export {Data}