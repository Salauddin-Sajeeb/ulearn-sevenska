import React, { useEffect, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import Nav from '../Lesson1-nav/Nav';
import Quiz6b from './Quiz6b';

const Exercise6b = () => {

    return (
        <div>
            <div className='d-flex bg-dark'>
                <Nav />
                <ProgressBar className='progress mt-3 mx-5' striped variant='warning' now={100} />
                <p className='mx-1 mt-2 text-white'>6 / 6</p>
            </div>
            <div className='page-6b pt-2'>
                <Quiz6b />
            </div>



        </div >
    );
};

export default Exercise6b;