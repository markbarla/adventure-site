
import React from 'react';
import '../App.css';
import Button from './Button';
import './HeroSection.css';
import Video from "../videos/video-1.mp4";

export default function HeroSection() {
    return (
        <div className='hero-container'>
            <video autoPlay="autoplay" loop="loop" muted src={Video} type="video/mp4" />

            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>

            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>

                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
};