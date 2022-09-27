import React from 'react'
import Common from "C:/Users/dell/Desktop/reactjs-by-thapa/react-application/src/Common/Common.js"
import web from 'C:/Users/dell/Desktop/reactjs-by-thapa/react-application/src/Images/MBG.jpg'

const About = () => {
    return (
        <>
            <Common name='Welcome to About Page' visit='/contact' btname='Contact Now' img={web} />
        </>
    )
}

export default About;
