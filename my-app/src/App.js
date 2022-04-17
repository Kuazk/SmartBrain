import './App.css';
import React from 'react';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
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




// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
// this will default to the latest version_id



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
    }
  };

  calculateFaceLocation =(result) => {

    const clarifaiFace = JSON.parse(result, null, 2).outputs[0].data.regions[0].region_info.bounding_box;
    
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    
   

    return {
      leftCol : clarifaiFace.left_col * width,
      topRow : clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col *width),
      bottomRow: height - (clarifaiFace.bottom_row *height)
    }

  }
  
  displayFaceBox = (box) =>{
    
    this.setState({box});
  
  }
  onInputChange = (event) => {
    this.setState({input: event.target.value});
    
  }
  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
  
    const raw = JSON.stringify({
      "user_app_id": {
            "user_id": "xqrl2mku7xik",
            "app_id": "646374474826499e92008216527d3e06"
        },
      "inputs": [
        {
          "data": {
            "image": {
              "url": this.state.input
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
    

    fetch(`https://api.clarifai.com/v2/models/face-detection/versions/45fb9a671625463fa646c3523a3087d5/outputs`, requestOptions)
    .then(response => response.text())
    .then(result => this.displayFaceBox(this.calculateFaceLocation(result)))
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
        <FaceRecognition box = {this.state.box} imageUrl={this.state.imageUrl}/>
        
      </div>
    );
  }
  
}

export default App;
