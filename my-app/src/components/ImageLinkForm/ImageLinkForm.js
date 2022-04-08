import React from 'react';
import './ImageLinkForm.css';
const ImageLinkForm = () =>{
    return (
        <div>
            <p className = 'f3' style ={{color: 'black', fontSize: '1.5em'}}>
                {'This will detect faces in your pictures. Give a Try!'}

            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className = 'f4 pa2 w-70 center' type='tex' />
                    <button className = 'w-30 grow f4 link ph3 dib white bg-light-purple'>Detect</button>
                </div>
            </div>
        </div>

    );
}


export default ImageLinkForm;