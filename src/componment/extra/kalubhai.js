import React from 'react'
import '../extra/newheader.css';
import job from '../images/job-ram.gif';
import mentor from '../images/mentor.gif';
import event from '../images/wevent.gif';
import city from '../images/city-final.gif';
import { Image } from 'react-bootstrap';

export default function Kalubhai() {
        return (
                <div>

                        <section>
                                <div >

                                        <div class="sec-title">
                                                <h1><span>CHECKOUT Imortant Links</span></h1>
                                                
                                        </div>

                                        <div class="content">

                                                <div class="service">
                                                        <div class="service-box">
                                                                <div class="icon-box">
                                                                <Image src={mentor}  width="250px"  height="200px" alt=""  srcset=""/>
                                                                </div>
                                                                <h3>Free Trial</h3>
                                                        </div>
                                                </div>

                                                <div class="service">
                                                        <div class="service-box">
                                                                <div class="icon-box">
                                                                <Image src={city}  width="250px"  alt="" height="200px"  srcset=""/>
                                                                </div>
                                                                <h3>Secure Payment</h3>
                                                        </div>
                                                </div>

                                                <div class="service">
                                                        <div class="service-box">
                                                                <div class="icon-box">
                                                                <Image src={job}  width="250px"  alt="" height="200px"  srcset=""/>
                                                                </div>
                                                                <h3>No Setup</h3>
                                                        </div>
                                                </div>

                                                <div class="service">
                                                        <div class="service-box">
                                                                <div class="icon-box">
                                                                <Image src={event}  width="200px"  alt=""  height="200px" srcset=""/>
                                                                </div>
                                                                <h3>24th Support</h3>
                                                        </div>
                                                </div>



                                        </div>


                                </div>
                        </section>
                </div>
        )
}
