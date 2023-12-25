import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brainlogo from './brainlogo.png';

const Logo = () => {
    return(
        <div className='ma4 mt0'>
            <Tilt className='Tilt br2 shadow-2' options={{ max : 25}} style={{ height: '150px', width: '150px'}}>
                <div className='pa3'><img style={{paddingTop: '5px'}} alt='brain logo' src={brainlogo}/></div>
            </Tilt>
        </div>
    );
}

export default Logo;