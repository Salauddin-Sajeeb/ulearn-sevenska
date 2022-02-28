import React, { useEffect, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import Nav from '../Lesson1-nav/Nav';
import './exercise6.css'
import Quiz6 from './Quiz6';
const Exercise6 = () => {


    return (
        <div>
            <div className='d-flex bg-dark'>
                <Nav />
                <ProgressBar className='progress mt-3 mx-5' striped variant='warning' now={95} />
                <p className='mx-1 mt-2 text-white'>6 / 6</p>
            </div>
            <div className='page-6 pt-2'>
                <Quiz6 />
            </div>

        </div>

    );

}
export default Exercise6;