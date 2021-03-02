import React from 'react';
import { Container } from 'react-bootstrap';

import '../extra/footer.css'
export default function Footer() {
        return (
                <div className="footer ">

                <Container className="d-flex fl flex-row  justify-content-around">
                        <div className="sec-1">
                                <h2>About Us</h2>
                                <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                         Consequatur at fuga placeat eum neque qui nemo inventore
                                          saepe culpa totam maiores, hic pariatur id sint?
                                </p>
                                
                        </div>
                        <div className="sec-1">
                                <h2>Services</h2>
                                <ul>
                                        <li>College</li>
                                        <li>Cut off</li>
                                        <li>Rank Prediction</li>
                                        <li>Exam Blog</li>
                                </ul>
                        </div>
                        <div className="sec-1">
                                <h2>Contact us </h2>
                                <div className="sec-2 d-flex flex-row ">
                                        <i className="fa fa-envelope m-2" aria-hidden="true"></i>
                                        <p>
                                        Ak8756110@gmail.com 
                                      </p>

                                </div>
                              

                        </div>
                </Container>

                </div>
        )
}
