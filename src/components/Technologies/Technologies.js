import React, { Component } from 'react';
import './Tech.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Tech from './Tech.svg';
class Technology extends Component {
    render() {
        return (
            <div className="title">
                <h1 className="mytitle">Technologies</h1>
                <hr className="underline" />
                <div className="container">
                    
                    <img src={Tech} />
                    <br />
                    <br />
                    <ScrollAnimation animateIn="fadeIn">
                    <div class="row">
                        <div class="col-12 col-md-4">
                            <div class="card-panel pink lighten-4">
                                <span >
                                    <h6>  React </h6> 
                               </span>
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="card-panel pink lighten-4">
                                <span >
                                    <h6>JavaScript</h6>
                                </span>
                            </div>
                        </div>
                            <div class="col-12 col-md-4">
                                <div class="card-panel pink lighten-4">
                                    <span >
                                        <h6> HTML/ CSS</h6>
                                    </span>
                                </div>
                            </div>
                    </div>
                    <div class="row">
                     
                        <div class="col-12 col-md-4">
                            <div class="card-panel pink lighten-4">
                                <span >
                                    <h6>Python</h6>
                                </span>
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="card-panel pink lighten-4">
                                <span >
                                    <h6>Django</h6>
                                </span>
                            </div>
                        </div>
                            <div class="col-12 col-md-4">
                                <div class="card-panel pink lighten-4">
                                    <span >
                                        <h6>Tensorflow</h6>
                                    </span>
                                </div>
                            </div>

                    </div>
            
                    <div class="row">
                        <div class="col-12 col-md-4">
                            <div class="card-panel pink lighten-4">
                                <span >
                                    <h6>C / C++</h6>
                                </span>
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="card-panel pink lighten-4">
                                <span >
                                    <h6>Node</h6>
                                </span>
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="card-panel pink lighten-4">
                                <span >
                                    <h6>Java</h6>
                                </span>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                </div>
                
            </div>
        )
    }
}

export default Technology;