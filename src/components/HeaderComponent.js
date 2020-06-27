import React, {Component} from 'react';
import {Jumbotron} from 'reactstrap';
import Particles from 'react-particles-js';

class Header extends Component{
    render() {
    return(
        <div>
         
        <div className = "jumbotron">
            <Jumbotron>        
                <h1 className = "display-3">
                    Hello World!
                </h1>
               
                <p>
                    Hi, I am <strong>Harshita</strong>,a Tech-student and a developer  
                </p>
             
            </Jumbotron>

        </div>   
      </div>  
    );
    }
}

export default Header;