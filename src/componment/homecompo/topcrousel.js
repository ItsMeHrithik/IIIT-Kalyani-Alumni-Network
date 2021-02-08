import React from 'react';
import Carousel from "react-elastic-carousel";

import { Card } from "react-bootstrap";

import '../../App.css';




const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 3 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 4 },
      ];



export default function Items() {
        return (
                <>
                <h1 className= "card">Example to setup your carousel in react</h1>
      <div >
        <Carousel breakPoints={breakPoints}>
        {newFunction()}
        {newFunction()}
        {newFunction()}
        {newFunction()}
        {newFunction()}
        {newFunction()}

          
      
        </Carousel>
      </div>



                </>
        )

  function newFunction() {
    return <div className='m-2 kard'>
      <Card style={{ width: 'auto' }}>
        <Card.Img variant="top" src="https://source.unsplash.com/1024x400/?poverty" height='150px' roundedCircle />
        <Card.Body>
          <Card.Title>Abhishek Shah</Card.Title>
          <Card.Text>
            SDE-II at Google
          </Card.Text>
          <div className="social">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-instagram"></i>
          </div>
        </Card.Body>
      </Card>

    </div>;
  }
}

