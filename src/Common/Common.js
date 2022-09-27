import React from 'react'
import { Link } from "react-router-dom";
import web from 'C:/Users/dell/Desktop/reactjs-by-thapa/react-application/src/Images/MBG.jpg'

const Common = (props) => {
  return (
    <>
        <>
            <section id='header' className='d-flex align-items-center'>
                <div className='container-fluid nav_bg'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                    <h1>
                                        {props.name} <strong className='brand-name'> Tech Prism </strong>
                                    </h1>
                                    <h2 className="my-3">
                                    We are the team of talented developers
                                    </h2>
                                    <div className='mt-3'>
                                        <Link to={props.visit} className="btn-get-started" >{props.btname}</Link>
                                    </div>
                                </div>
                                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                    <img className='img-fluid animated' src={props.img} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    </>
  )
}

export default Common;
