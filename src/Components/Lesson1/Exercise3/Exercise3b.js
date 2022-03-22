import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from '../Lesson1-nav/Nav';
import audio6 from '../../../audios/audios-exercise3/audio_6.m4a'
import audio7 from '../../../audios/audios-exercise3/audio_7.m4a'
import audio8 from '../../../audios/audios-exercise3/audio_8.m4a'
import audio9 from '../../../audios/audios-exercise3/audio_9.m4a'
import './Exercise3.css'
import ReactAudioPlayer from 'react-audio-player';
const data = [
    {
        "id": 6,
        "audio": audio6,
        "text1": 'Det finns ett hotel där ',
        "text2": 'I remember the first time'
    },
    {
        "id": 7,
        "audio": audio7,
        "text1": 'Vi ska mötas vid sju!',
        "text2": 'We will meet at seven!'
    },
    {
        "id": 8,
        "audio": audio8,
        "text1": 'Varför studerar ni franska?',
        "text2": 'Why are you studying French?'
    },
    {
        "id": 9,
        "audio": audio9,
        "text1": 'De dansar bra',
        "text2": 'They dance well'
    },
]
const Exercise3b = () => {
    return (
        <div>
            <div className='d-flex bg-dark'>
                <Nav />
                <ProgressBar className='progress mt-3 mx-5' striped variant='warning' now={75} />
                <p className='mx-1 mt-2 text-white'>3 / 6</p>
            </div>
            <div className='exercise-3 pt-3'>
                <h1>Listen to the subjects pronouns</h1>
                <div className='list-container'>
                    {
                        data.map(items => <li className='list' key={items.id}>
                            <div className='d-flex py-1'>
                                <ReactAudioPlayer
                                    className='mt-4'
                                    src={items.audio}
                                    controls
                                />
                                <div className='mt-3 mx-5 background pt-2 '>
                                    <p><b>{items.text1}</b></p>
                                    <p>{items.text2}</p>
                                </div>
                            </div>
                        </li>)
                    }
                </div>
            </div>

            <div className='continue-section ex-3 next pt-2'>
                <button className='continue-btn  btn-lg'>
                    <Link className='btn-style' to='/e4'>CONTINUE</Link>
                </button>
            </div>
        </div>
    );
};

export default Exercise3b;