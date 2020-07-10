import React, { Component } from 'react';
import {slideInLeft} from 'animate.css';
import './AboutMe.css';
import Doll from'./doll.svg';
// import { Animated } from 'react-animated-css'
class About extends Component {
    render(){
        return(
            <div className = "title">
                <h1>About Me</h1>
                <hr className = "underline" />
                <div className = "container">
                    <img src={Doll} />
                    <br />
                    <br />
                    <p className="item">
                            Hey there, thanks for taking out the time to read through my portfolio
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper nibh neque, at interdum augue rhoncus tempor. In vel fringilla libero, sit amet luctus nisl. Proin lobortis ullamcorper sapien laoreet venenatis. Aenean odio massa, molestie at arcu non, facilisis placerat turpis. Integer euismod commodo dui, nec iaculis ex semper at. Mauris suscipit turpis vitae mattis porta. Duis vehicula eleifend eleifend. Proin fermentum purus quis erat semper, sodales mollis leo lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin pretium, massa ut interdum varius, quam nunc ullamcorper nibh, quis euismod magna est malesuada nibh. Quisque aliquam suscipit blandit. Aenean ut pulvinar risus. Vestibulum a arcu euismod, fringilla mi in, efficitur leo. Proin ac sem turpis.
                </p>
                
                </div>
            </div>
        )
    }
}

export default About;