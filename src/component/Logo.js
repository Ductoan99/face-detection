import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css'
import Img from '../image/brain.png'
const Logo = () => {
    return (
        <div>
            <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"> <img  alt="vcl" src={Img}/></div>
            </Tilt>
        </div>
    )
}

export default Logo