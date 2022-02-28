import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './exercise5.css'
import Nav from '../Lesson1-nav/Nav';
import { Link } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import './exercise5.css'
import Quiz5 from './Quiz5';


const Exercise5 = () => {

    return (
        <div>
            <div className='d-flex bg-dark'>
                <Nav />
                <ProgressBar className='progress mt-3 mx-5' striped variant='warning' now={90} />
                <p className='mx-1 mt-2 text-white'>5 / 6</p>
            </div>
            <div className='exercise-5 pt-2'>
                <Quiz5 />
            </div>

        </div>

    );
};

export default Exercise5;