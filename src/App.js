import React, { Component } from 'react';
import Navigation from './component/Navigation'
// import Logo from './component/Logo'
import ImageLinkForm from './component/ImageLinkForm'
import Recognition from './component/Recognition/Recognition'
import Rank from './component/Rank'
import Particles from 'react-particles-js';
import './Particle.css'
import Clarifai from 'clarifai';

const app = new Clarifai.App({
    apiKey: 'api key cua ban(your api key )'
});

const particleOption = {
    particles: {
        number: {
            value: 70,
            density: {
                enable: true,
                value_area: 350
            }
        }
    }
}
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: 'hello',
            imageUrl: '',
            box:{}
        }
    }
    calculateFaceLocation = (data) => {
        console.log(data.outputs[0].data.regions[0].region_info.bounding_box);
        const face = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.querySelector('#inputImage')
        const height = Number(image.height);
        const width = Number(image.width);
        return {
            leftCol: face.left_col * width,
            topRow: face.top_row * height,
            rightCol: width - (face.right_col * width),
            bottomRow: height - (face.bottom_row * height)
        }
    }
    dispalyFaceBox = (box)=>{
         this.setState({box: box})
    }
    onInputChange = (event) => {
        this.setState({ input: event.target.value })
    }
    onSubmit = () => {
        this.setState({ imageUrl: this.state.input })
        console.log('detected clicked');
        app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
            .then(
                response => { this.dispalyFaceBox(this.calculateFaceLocation(response)) },
                err => { }
            );
    }

    render() {
        return (
            <div className="App" >
                <Particles className="particle"
                    params={{ particleOption }} />
                {/* <Navigation /> */}
                {/* <Logo /> */}
                <Rank />
                <ImageLinkForm
                    onInputChange={this.onInputChange}
                    onSubmit={this.onSubmit}
                />
                <Recognition
                    imageUrl={this.state.imageUrl}
                    box={this.state.box}
                />
            </div>
        );
    }
}

