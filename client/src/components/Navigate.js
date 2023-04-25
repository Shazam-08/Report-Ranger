import React from 'react'
import{Link} from 'react-router-dom'

function Navigate() {
  return (
    <nav>Don't have an account?<Link to="signup">signup</Link></nav>
  )
}

export default Navigate