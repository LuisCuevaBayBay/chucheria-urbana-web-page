import React from 'react';
import './Hero.css';

function HeroSection(){
    return(
        <div class="hero-section">
            <div class="hero-overlay">
                <div class="hero-content text-center">
                    <h1>Chucheria Urbana</h1>
                    <p>Tu servicio de catering</p>
                    <a href="" className='btn btn-outline-light'>
                        Reseva tu catering ahora
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;