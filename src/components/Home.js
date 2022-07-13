import React from 'react'
import logo from '../images/logo.png'
import solid from '../images/Solidlines.png'
import Footer from './Footer'
import Form from './Form'


const Home = () => {
    return (
        <>
            <div className='main' >
                <div id='mainDiv'></div> 
                <nav className='container  text-lg-start text-center mb-lg-0 mb-4' >
                    <img src={logo} alt='logo' />
                </nav>

                <div className='container d-flex justify-content-center align-items-center'>
                    <div className=' content-box'>
                        <div className='text-center'>
                            <img src={solid} alt='' />
                            <h3 className='mt-4'>It’s a delight to have you onboard</h3>
                            <p className='mt-3 mb-0'>Help us know you better.<br />
                                (This is how we optimize Wobot as per your business needs)</p>
                        </div>

                        {/* // form-section // */}

                        <Form/>

                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Home