import React from 'react'
import './Recognition.css'

const Recognition = ({imageUrl, box}) => {
    return (
        <div className="mx-auto col-md-4" style={{ display: 'flex', justifyContent: 'center' }}>
            <img id="inputImage" src={imageUrl} alt="" style={{width:400,height:400, backgroundSize:'cover'}}/>
            <div className="bounding-box" style={{top:box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        </div>
    )
}

export default Recognition;