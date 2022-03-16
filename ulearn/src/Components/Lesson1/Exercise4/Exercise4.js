import React, { useState } from 'react';

import Nav from '../Lesson1-nav/Nav';
import { ProgressBar } from 'react-bootstrap';
import './exercise4.css'
import Quiz4 from './Quiz4';



const Exercise4 = () => {

    return (
        <div>
            <div className='d-flex bg-dark'>
                <Nav />
                <ProgressBar className='progress mt-3 mx-5' striped variant='warning' now={80} />
                <p className='mx-1 mt-2 text-white'>4 / 6</p>
            </div>
            <div className='exercise-4 pt-2'>
                <Quiz4 ></Quiz4>
            </div>

        </div>

    );
};

export default Exercise4;