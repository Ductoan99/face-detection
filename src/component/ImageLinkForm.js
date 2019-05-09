import React from 'react'
import './Logo.css'
const ImageLinkForm = ({onInputChange, onSubmit}) => {
    return (
        <div className="mx-auto col-md-4 linkImage">
            <p className="mx-auto" style={{ display: 'flex', justifyContent: 'center' }}>Copy link image vào đây để nhận dạng gương mặt</p>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Link ảnh nhận dạng" aria-label="Recipient's username" aria-describedby="button-addon2" 
                    onChange={onInputChange}
                />
                <div className="input-group-append">
                    <button className="btn btn-success" type="button" id="button-addon2"
                        onClick={onSubmit}
                    >Nhận dạng</button>
                </div>
            </div>
        </div>

    )
}

export default ImageLinkForm;