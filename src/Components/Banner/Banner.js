import React from 'react';
import propic from "../../resources/propic.jpg";
import "./Banner.css";
const Banner = () => {
    return (
        <div className='flex items-center justify-around my-8 banner'>
            <div>
                <h1 className='text-5xl font-semibold text-center Mb-32'>FAHMIDA MAHJABIN</h1>
                <div className='flex mt-32 '>
                    <p className='staticText'>I am a</p>
                    <ul className='dynamicText'>
                        <li>Full Stack Web Developer</li>
                        <li>React Developer</li>
                        <li>MERN Stack Developer</li>
                        <li>Problem Solver</li>
                        <li>Junior Software Engineer</li>
                    </ul>
                </div>
            </div>
            <div>
                <img className = "propic" src={propic}></img>
            </div>
        </div>
    );
};

export default Banner;