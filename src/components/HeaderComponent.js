import React, {Component} from 'react';
import {Jumbotron} from 'reactstrap';
import Particles from 'react-particles-js';

class Header extends Component{
    render() {
    return(
        <div className = "wrapper">
            {/* <Particles className = "particles"
                params={{
                    particles: {
                        number: {
                            value: 200,
                            density: {
                                enable: true,
                                value_area: 1000,
                            }
                        },
                    },
                    interactivity : {
                        detect_on: "canvas",
                        events : {
                        onhover: {
                        enable: true,
                        mode: [
                                "grab",
                                "bubble"
                            ]
                           },

                        },
                        modes: {
                            "grab": {
                                distance: 400,
                                line_linked: {
                                opacity: 0.7
                                }
                            }
                    }
                }
            }}
            />       */}
        <div >
                   
                <h1 className = "display-3">
                    Hello World!
                </h1>
               
                <p className = "head">
                    Hi, I am <strong>Harshita</strong>, a Tech-student and a developer
                </p>
                <div className = "mybutton">
                    <a role="button" className="btn btn-outline-light" href="https://github.com/Harshita-Kanal">View on GitHub</a>
                </div>
             
          
        </div>   
      </div>  
    );
    }
}

export default Header;