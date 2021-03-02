import React, { Component } from 'react';

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ok from '../images/download.jpeg'

export default class Slider extends Component {
        render() {
                return (
                        <div className="">


                                <Carousel>
                                        <Carousel.Item cl interval={1000}>
                                                <img
                                                        className="d-block w-100"
                                                        src='https://source.unsplash.com/1024x300/?world'
                                                        style={{height:'400px'}}
                                                        alt="First slide"
                                                />
                                                <Carousel.Caption>
                                                        <h3>First slide label</h3>
                                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                                </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item interval={500}>
                                                <img
                                                        className="d-block w-100"
                                                        src="https://source.unsplash.com/1024x300/?university"
                                                        alt="Third slide"
                                                />
                                                <Carousel.Caption>
                                                        <h3>Second slide label</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                                <img
                                                        className="d-block w-100"
                                                        src="https://source.unsplash.com/1024x300/?railway"
                                                        alt="Third slide"
                                                />
                                                <Carousel.Caption>
                                                        <h3>Third slide label</h3>
                                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                                </Carousel.Caption>
                                        </Carousel.Item>
                                </Carousel>




                        </div>
                )
                                
                    
        }
}
