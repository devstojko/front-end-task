import React from 'react'

import { Jumbotron } from 'reactstrap'

export default function Home () {
  return (
    <Jumbotron className="text-center">
      <h1 className="display-4 mb-4">
        Welcome to homepage!
      </h1>
      <p className="lead">
        Front-End test developed by Nemanja Stojković
      </p>
    </Jumbotron>
  )
}