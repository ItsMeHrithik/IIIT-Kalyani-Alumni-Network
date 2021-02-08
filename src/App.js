import React from 'react';
import Slider from "./componment/homecompo/Crousel";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './componment/homecompo/Navbar';
import { Col, Container, Row } from 'react-bootstrap';
import Item from './componment/homecompo/topcrousel';
import Welocme from './componment/homecompo/welocme';
import Kalubhai from './componment/extra/kalubhai';
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Slider />
        <Container>
          <Item />
          <Row>
            <Col lg="6">
              <Welocme />
            </Col>
            <Col lg="6">
              <Welocme />
            </Col>
          </Row>
          <Kalubhai />
          
        </Container>

        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>
    </>
  )
}

export default App;
