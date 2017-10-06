import React from 'react'
import { Link } from 'react-router-dom'

import { Jumbotron } from 'reactstrap'

export default function NoMatch () {
  return (
    <Jumbotron className="text-center">
      <h1 className="display-4 mb-4">
        Error 404
      </h1>
      <p className="lead mb-5">Page not found!</p>
      <Link to="/">Back to homepage</Link>
    </Jumbotron>
  )
} 
