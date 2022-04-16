import './App.css';
import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Particles from "react-tsparticles";
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import 'tachyons';

const particleOptions = {
  fpsLimit: 60,
    particles: {
      color: {
        value: "rgb(200, 200, 200)"
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 70,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.5,
        width: 1,
        blur: 5
      },
      move: {
        enable: true,
        speed: 1,
        out_mode: "out",
        bounce: true,
        
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true
      },
      modes: {
        repulse:{
          distance:100,
          duration: 0.3,
        },
      },
},}

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      input: '',
    }
  };
  onInputChange = (event) => {
    console.log(event.target.value);
  }
  onButtonSubmit = () => {
    console.log('click');
  }
  render() {
    return (
      <div className="App">
        
        <Particles className='particles'
          options = {particleOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}/>
          {/* <FaceRecognition /> */}
      </div>
    );
  }
  
}

export default App;
