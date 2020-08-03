import React, { Component } from 'react';
import './Projects.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Projects from './projects.svg';
// import { Animated } from 'react-animated-css'
class Project extends Component {
    render() {
        return (
            <div className="title">
                <h1 className="mytitle">Projects</h1>
                <hr className="underline" />
                <div className="container">
                    <img src={Projects} />
                    <br />
                    <br />
                    <ScrollAnimation animateIn="fadeIn">
                        <p className="item">
                      Projects go here
                        </p>
                    </ScrollAnimation>
                </div>
            </div>
        )
    }
}

export default Project;