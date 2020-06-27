import React, {Component} from 'react';
import './App.css';
import Header from './components/HeaderComponent';
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
     <h1> Projects </h1>     
    </div>
  );
}


}

export default App;
