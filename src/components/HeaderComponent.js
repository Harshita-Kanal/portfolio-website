import React, {Component} from 'react';
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
            <Particles className = "particles"
            params = {{
                particles: { number: { value: 80, density: { enable: true, value_area: 800 } }, color: { value: "#ffffff" }, shape: { type: "circle", "stroke": { width: 0, color: "#000000" }, polygon: { nb_sides: 5 }, image: { src: "img/github.svg", width: 100, height: 100 } }, opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } }, size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } }, line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 }, move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } } }, interactivity: { detect_on: "canvas", events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true }, modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } } }, retina_detect: true
            }}
             
            />
        <div>
                   
                <h1 className = "display-3">
                    Hello World!
                </h1>
               
                <p className = "head">
                    Hi, I am <strong>Harshita</strong>, a Tech-student and a developer
                </p>
                <div className = "mybutton">
                    <a role="button" rel = "noopener noreferrer"  target = "_blank" className="btn btn-outline-light" href="https://github.com/Harshita-Kanal">View on GitHub</a>
                    <a role="button" rel="noopener noreferrer"  target ="_blank" className="btn btn-outline-light ml-3" href="https://www.linkedin.com/in/harshita-kanal-400563166/">View on Linkedin</a>

                </div>
             
          
        </div>   
      </div>  
    );
    }
}

export default Header;