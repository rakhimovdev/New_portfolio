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
    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = '../../Images/photo_2023-10-13_15-09-43.pdf'; // Fayl manzili
        link.download = 'resume.pdf';           // Fayl nomi
        link.click();
    };

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
                    <button onClick={downloadResume}>Download Resume</button>
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

