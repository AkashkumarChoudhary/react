"use client"
import React, { useState } from 'react'

const page = () => {
  const[marks, setMarks] = useState(50)
  return (
    <>
    <h1>My marks were {marks}</h1>
    <button onClick={()=> {
      setMarks(56)
    }} >Update</button>
    </>
  )
}

export default page

