import React, { Component } from 'react'
import "./Projects.css"
import img1 from "../../Images/Paint.webp"
import img2 from "../../Images/download.png"
export class Projects extends Component {
    render() {
        return (
            <div className='Project'>

                <div className="Boxes">
                    <h1>My projects:</h1>
                    <div className="inBoxes2">
                        <div className="box">
                            <a href="https://paint-orpin.vercel.app/">
                                <img src={img1} alt="" />
                            </a>
                        </div>
                        <div className="box">
                            <a href="https://new-oxford.vercel.app/">
                                <img src={img2} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects
