import React, {Component} from 'react';
import './App.css';
import About from './components/AboutMe/AboutMe';
import Header from './components/HeaderComponent';
import Technology from './components/Technologies/Technologies';
import Project from './components/Projects/Projects';
import Footer from './components/Footer/Footer';


class App extends Component {



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
     <Footer />
    </div>
  );
}


}

export default App;
