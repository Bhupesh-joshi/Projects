import React from 'react'
import { Link } from "react-router-dom";
import Common from "../Common/Common"
import web from 'C:/Users/dell/Desktop/reactjs-by-thapa/react-application/src/Images/MBG.jpg'

const Home = () => {
    return (
        <>
            <Common name='Grow your Business with' visit='/service' btname='Get Started' img={web} />
        </>
    )
}

export default Home;
