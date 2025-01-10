import React from 'react'
import "./About.css"
function About() {
    return (
        <div className='About'>
            <div className="myself">
                <h1 className='h1'>About me:</h1>
                <h1>Hello my full name is Rahimjonov Muhammadali.</h1>
                <h2>I'm 16 years old and I study at boarding school.</h2>
                <h2>I have been involved in IT since the 7th grade.</h2>
                <h2>And now I have got 3 certificate from Web Development</h2>
                <h2>I know Front-end and Backend</h2>
            </div>
            <div className="skils">
                <h1>My skils:</h1>
                <div className='Box'>
                    <h2>Html 90%</h2>
                    <div className="html">
                        <div></div>
                    </div>
                </div>
                <div className='Box'>
                    <h2>Css 80%</h2>
                    <div className="css">
                        <div></div>
                    </div>
                </div>
                <div className='Box'>
                    <h2>Tailwind 75%</h2>
                    <div className="tailwind">
                        <div></div>
                    </div>
                </div>
                <div className='Box'>
                    <h2>Sass 70%</h2>
                    <div className="sass">
                        <div></div>
                    </div>
                </div>
                <div className='Box'>
                    <h2>Javascript 70%</h2>
                    <div className="javascript">
                        <div></div>
                    </div>
                </div>
                <div className='Box'>
                    <h2>React.js 80%</h2>
                    <div className="react">
                        <div></div>
                    </div>
                </div>
                <div className='Box'>
                    <h2>Node.js 85%</h2>
                    <div className="node">
                        <div></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
