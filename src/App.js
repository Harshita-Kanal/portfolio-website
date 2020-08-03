import React, {Component} from 'react';
import './App.css';
import About from './components/AboutMe/AboutMe';
import Header from './components/HeaderComponent';
import Technology from './components/Technologies/Technologies';
import Project from './components/Projects/Projects';
import { render } from '@testing-library/react';
import Particles from 'react-particles-js';

class App extends Component {
 constructor(props){
   super(props);
 }


  render(){ 
  return (
    <div className="App">   
     <Header />
     <br />
     <About />  
     <br />
     <Technology />
     <br />
     <Project />
    </div>
  );
}


}

export default App;
