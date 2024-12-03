import React, { Children } from 'react'

const Container = ({children}) => {
  return (
    <div className="card m-auto" style={{width: "60%"}}>
 
  <div className="card-body">
    {children}
  </div>
</div>
  )
}

export default Container
