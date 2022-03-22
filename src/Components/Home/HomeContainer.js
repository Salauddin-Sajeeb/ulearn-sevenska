import { Tooltip, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import Useauth from '../../Hooks/Useauth';
import './HomeContainer.css'
const HomeContainer = () => {
    const { percent, lession1 } = Useauth()
    return (
        <div className='home-container'>

            <div className="d-flex">
                <img className='memoji mx-5 img-fluid' src="https://i.ibb.co/NKX2fMH/memoji.png" alt="" />
                <div className=''>
                    <h1 className='text-start mt-3'>Hej!</h1>
                    <h3 className='d-flex'><span className='mx-2'>You have completed</span><b> {percent}% </b> &nbsp;of the course</h3>
                </div>

            </div>

            <div className="lesson d-flex">
                <div>

                    <div className="ellipse" style={{ background: lession1 ? "green" : '#E69C05' }}>

                    </div>
                    <div className="ellipse-1" style={{ background: lession1 ? "lightgreen" : '#FCD688' }}>

                    </div>




                    <div className='line-1'></div>
                    <div className="ellipse">

                    </div>
                    <div className="ellipse-1">

                    </div>
                    <div className='line-1'></div>
                </div>
                <div className='lessons-input'>

                    <motion.button
                        className='button'
                        whileHover={{ scale: 1.1 }}
                    >
                        <Link className='button-details' to='/e0'>
                            <h3>Lesson 1 : greetings & subject pronouns </h3>
                            <h5 className='ml-2'>Here you will learn : </h5>
                            <ul>
                                <li>how to greet people</li>
                                <li>subject pronouns</li>
                            </ul>
                        </Link>

                    </motion.button>

                    <Tooltip
                        followCursor={true} title={<Typography fontSize={14} height='50px'>{!lession1 ? 'lession 2 will only be available once lession 1 is completed' : null}</Typography>}>
                        <motion.button
                            className='button-2'
                            whileHover={{ scale: 1.1 }}
                            disabled={!lession1 ? true : false}

                        >

                            <h3>Lesson 2 : greetings & subject pronouns</h3>
                            <h5 className='ml-2'>Here you will learn : </h5>
                            <ul>
                                <li>how to greet people</li>
                                <li>subject pronouns</li>
                            </ul>

                        </motion.button>

                    </Tooltip>

                </div>

            </div>
        </div>
    );
};


export default HomeContainer;