import React, { Component } from 'react'
import {
  Route, 
  Switch,
  NavLink 
} from 'react-router-dom'

import {
  Container,
  Row,
  Col,
  Nav,
  NavItem
} from 'reactstrap'

import Home from '../Home'
import NoMatch from '../NoMatch'
import TableContainer from '../Table/TableContainer'

export default function App () {

  const tableRoutePaths = [
    "/table/users",
    "/table/uploads",
    "/table/carPurchases",
    "/table/testData"
  ]

  const renderTableRoutes = tableRoutePaths.map((path, i) => {
    return (
      <Route 
        key={i+1}
        exact
        path={path}
        component={TableContainer}
      />
    )
  })

  return (
    <Container fluid>
      <Nav tabs className="my-4">
        <NavItem>
          <NavLink className="nav-link" to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/table/users">Users table</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/table/uploads">Uploads table</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/table/carPurchases">carPurchases table</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/table/testData">testData table</NavLink>
        </NavItem>
      </Nav>

      <Row>
        <Col className="mx-lg-auto">
          <Switch>
            <Route 
              exact 
              path="/"
              component={Home}
            />
            {renderTableRoutes}
            <Route path="*" component={NoMatch}/>
          </Switch>      
        </Col>
      </Row>
    </Container>
  )
}