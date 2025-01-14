import React from 'react';
import "./Main.css"
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import img1 from "../../Images/photo_2023-09-10_18-30-40.jpg"

function Main() {
    const [text] = useTypewriter({
        words: ['Web Developer', 'Software Engineer', 'Backend Developer'],
        loop: 0, // 0 -> Infinite loop
        delaySpeed: 1500, // Delay between each word
    });

    return (
        <div className='Main'>
            <div className="inMain">
                <div>
                    <h1>I'm
                        <span>
                            {` ${text}`}
                        </span >
                        <Cursor />
                    </h1>
                </div>
                <div className='Btn'>
                    <a href="../../Images/10-A sinf i.doc" download>
                        <button>Download Resume</button>
                    </a>
                    <a href="/contact">
                        <button>Contact me</button>
                    </a>
                </div>
            </div>
            <div className="inMain2">
                <img src={img1} alt="" />
            </div>
        </div>
    );
}

export default Main;

