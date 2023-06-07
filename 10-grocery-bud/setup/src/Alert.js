import React, { useEffect } from 'react'

const Alert = ({type,msg,removeAlert,list}) => {
  console.log(type);
useEffect(()=>{
  const timeOut = setInterval(()=>{
    removeAlert();
  },3000)
  return ()=>{clearTimeout(timeOut)}
},[list])

  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
