import React, { Component } from 'react';
// import {slideInLeft} from 'animate.css';
import './AboutMe.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Doll from'./doll.svg';
// import { Animated } from 'react-animated-css'
class About extends Component {
    render(){
        return(
            <div className = "title">
                <h1 className = "mytitle">About Me</h1>
                <hr className = "underline" />
                <div className = "container">
                    <img src={Doll} alt = "" />
                    <br />
                    <br />
                    <ScrollAnimation animateIn="fadeIn">
                    <div className = "card">
                    <div className = "card-body">
                    <p className= "flow-text">
                            <span className="high">Hi there!</span> <br />
                            Thanks For taking out the time to look here, you are in for a treat! <br />
                                    <span className="high" >I am Harshita Kanal,</span> <br/>
                            A Computer Science undergraduate, Front-End developer and an Open-Source and Machine Learning Enthusiast <br/>
                            Most of the time when I am not reading code on GitHub and silently admiring the art of writing beautiful code,
                            I usually bulid things. I certainly believe, that coders are just problem solvers who write code.
                            Coding, for me is not my profession but my passion.
                            Look around to find my projects, and other involvements. <br/>
                            Currently, I am exploring deep learning and the amazing world of data science, also constantly learning new tech. <br />
                            I'm looking to collaborate on anything that you want me to. <br />
                            I love the world of web, particularly the side of it which is visible to the user.<br />
                            Building products that make an impact in people's lives is my passion.
                    </p>
                        </div>
                        </div>
                    </ScrollAnimation>  
                </div>
            </div>
        )
    }
}

export default About;