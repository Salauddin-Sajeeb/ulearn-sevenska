import React, { useState } from 'react';
import './page3.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Nav from '../Lesson1-nav/Nav';
import ReactPlayer from 'react-player';

const Page3 = () => {
    const [show, Setshow] = useState(false);
    const [button, setbutton] = useState(false)

    return (
        <div>
            <div className='d-flex bg-dark'>
                <Nav />
                <ProgressBar className='progress mt-3 mx-5' striped variant='warning' now={15} />
                <p className='mx-1 mt-2 text-white'>3 / 6</p>
            </div>


            <div className='page-1'>
                <h1 className='py-4'>Your first Swedish words! Click to listen</h1>
                <div className='hej-audio d-flex align-items-center'>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=h8UFY79FiAY"
                        height='300px'
                        controls
                        autoplay
                    />
                </div>
                <div className='god-morgon d-flex align-items-center'>
                    {
                        show ? <h4><b>God morgon</b></h4> : null
                    }
                </div>
                <div className='divider d-flex align-items-center'>

                </div>
                <div className='goodmorning d-flex align-items-center'>
                    <h4>Good morning</h4>
                </div>

            </div>
            <div className='continue'>
                <div className='pt-3 d-flex align-items-center'>
                    {
                        !button ? <motion.button

                            whileTap={{ scale: 1.3, background: "#51E179" }}
                            onClick={() => {
                                setTimeout(function () {
                                    setbutton(true)
                                }, 2000);
                                Setshow(true)

                            }} className='hej-button '>3<span className='px-5'>God morgon</span></motion.button> : null
                    }
                </div>
                <div className='next'>
                    {
                        button ? <button className='continue-button btn-lg d-flex align-items-center'

                        ><Link className='continue-btn-style' to='/e1p4'>CONTINUE</Link></button> : null
                    }
                </div>
            </div>
        </div>
    );
};

export default Page3;