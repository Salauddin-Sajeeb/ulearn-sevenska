import React from 'react';
import Nav from './Lesson1-nav/Nav';
import './Exercise0.css'
import { Link } from 'react-router-dom';
const Exercise0 = () => {
    return (
        <div>
            <div className='bg-dark'>
                <Nav />
            </div>
            <div className='exercise-0'>
                <img className='memoji d-flex img-fluid' src="https://i.ibb.co/YBzf5YG/undraw-online-test-gba7.png" alt="" />
                <div className='ex0-text'>
                    <p className='text-start mx-3 pt-3'>Great that you decided to learn Swedish, where Swedish and English have lots of similar vocabulary and grammar.</p>
                    <p className='text-start mx-3'>in this lession1 we will :</p>
                    <ul>
                        <li>Great that you decided to learn Swedish, where Swedish and English have lots of similar vocabulary and grammar.</li>
                        <li>learn about subject pronouns with many examples (in terms of grammar)</li>
                        <li>test our knowledge of subject pronouns with Swedish songs</li>
                        <li>discover and listen to a few real-life conversations using the vocabulary learnt</li>
                    </ul>
                </div>

            </div>
            <div className='next'>
                <button className='continue-button btn-lg d-flex align-items-center'>
                    <Link className='continue-btn-style' to='/e1p1'>Continue</Link>
                </button>
            </div>

        </div>
    );
};

export default Exercise0;