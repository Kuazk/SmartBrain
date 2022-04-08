import React from 'react';
import Tilty from 'react-tilty';
import './Logo.css';
import brain from './brain.png';
const Logo = () => {
    return(
        <div className="ma4 mt0">
            <Tilty className="tilty br2 shadow-3" glare scale={1.05} maxGlare={0.5} style={{height: 130, width:130}}>
                <div className="inner pa3"> 
                <img style={{paddingTop: '5px', width: '100px'}} alt ='logo' src={brain}/> 
                </div>
                </Tilty>
        </div>
    );
}

export default Logo;