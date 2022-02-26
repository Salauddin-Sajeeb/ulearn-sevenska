import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from '../Lesson1-nav/Nav';
import './Exercise2.css'
import Quiz from './Quiz';
const Exercise2 = () => {

    return (
        <div>
            <div className='d-flex bg-dark'>
                <Nav />
                <ProgressBar className='progress mt-3 mx-5' striped variant='warning' now={35} />
                <p className='mx-1 mt-2 text-white'>2 / 6</p>
            </div>
            <div className='exercise-2 pt-2'>
                <Quiz />

            </div>


        </div>

    );
};

export default Exercise2;