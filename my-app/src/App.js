import './App.css';
import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Particles from "react-tsparticles";
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Clarifai from 'clarifai';
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
const raw = JSON.stringify({
  "user_app_id": {
        "user_id": "xqrl2mku7xik",
        "app_id": "646374474826499e92008216527d3e06"
    },
  "inputs": [
    {
      "data": {
        "image": {
          "url": "https://samples.clarifai.com/metro-north.jpg"
        }
      }
    }
  ]
});

const requestOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key 5f6a999ee5ad4c7093bc877c3a56674e'
  },
  body: raw
};
const app = new Clarifai.App({
  apiKey: '5f6a999ee5ad4c7093bc877c3a56674e'
 });

// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
// this will default to the latest version_id



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
    fetch(`https://api.clarifai.com/v2/models/face-detection/versions/45fb9a671625463fa646c3523a3087d5/outputs`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(JSON.parse(result, null, 2).outputs[0].data))
    .catch(error => console.log('error', error));
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
          onButtonSubmit={this.onButtonSubmit}

          />
          <FaceRecognition />
      </div>
    );
  }
  
}

export default App;
