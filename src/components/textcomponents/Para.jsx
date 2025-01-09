import React from 'react'

const Para = ({className="", children}) => {
  return (
    <p className={`text-[0.78rem] ${className}`}>{children}</p>
  )
}

export default Para