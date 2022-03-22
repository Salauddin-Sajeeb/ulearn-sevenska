import React, { useState } from 'react';
import Data4 from './Data4';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import './exercise4.css'
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fbc556',

    boxShadow: 24,
    p: 4,
    borderRadius: '5%'
};
const Quiz4 = () => {
    const [solution, setSolution] = useState(false)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [ans, setAns] = useState([])
    const [wrong, setWrongInput] = useState([])

    const [question, setQuestion] = useState(0)
    const [result, setShowResults] = useState(false)
    const [score, setScore] = useState(0)
    const right = [false, false, false, false, false, false, false, false, false, false]
    const incorrect = [true, true, true, true, true, true, true, true, true, true]
    const answers = [
        'de', 'de', 'du', 'du', 'vi', 'du', 'de', 'vi', 'de', 'jag'
        ,]
    const optionClicked = (isCorrect) => {
        // Increment the score
        if (isCorrect) {
            setScore(score + 1);
            setWrongInput([...wrong, incorrect[question]])

        }
        console.log(score)
        console.log(wrong)


        if (question + 1 < Data4.length) {
            setQuestion(question + 1);

        } else {
            setShowResults(true);
        }

        if (!isCorrect) {
            setWrongInput([...wrong, right[question]])
        }

        setAns([...ans, answers[question]])
    };
    return (
        <div>
            {result ? (
                /* 4. Final Results */
                <div className="final-results pt-5 d-flex align-items-center">

                    <h2>
                        You scored {score}/10
                    </h2>
                    {
                        score < 4 ?
                            <img className='img-result img-fluid' src='https://i.ibb.co/R4vsyJp/retry.png'></img>
                            :
                            <img className='img-result img-fluid' src="https://i.ibb.co/gm1wrmM/well-done.png" alt="" />

                    }
                </div>

            ) : (
                <div className='exercise-4'>
                    <h1 className='pt-4'>Choose the correct subject pronouns</h1>
                    {/* <h3> This song is by Myra Granberg - Tills mitt hjärta går under </h3> */}
                    <div className='video'>
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=zFw-zYKO2rg'
                            height='180px'
                            width='300px'
                            controls
                        />
                    </div>

                    {/* <h4 className='mt-1 pt-5'>Fill in the gaps with the correct subject pronouns</h4> */}

                    <div className='text-area d-flex '>
                        <div className='blank-area px-3'>
                            <p>Baby, <input
                                style={{ color: !wrong[0] ? 'red' : 'green', fontWeight: "bold" }}
                                value={ans[0]}
                                type="text" name="one"

                                onChange={(e) => e.preventDefault()}
                            /> får säga vad <input
                                    style={{ color: !wrong[1] ? 'red' : 'green', fontWeight: "bold" }}
                                    value={ans[1]}
                                    onChange={(e) => e.preventDefault()}
                                    type="text" /> vill,
                                <br />Ingenting som <input
                                    style={{ color: !wrong[2] ? 'red' : 'green', fontWeight: "bold" }}
                                    value={ans[2]}
                                    onChange={(e) => e.preventDefault()} type="text" /> ska tänka på
                                <br />Skrik till hela världen "<input
                                    style={{ color: !wrong[3] ? 'red' : 'green', fontWeight: "bold" }}
                                    value={ans[3]}
                                    onChange={(e) => e.preventDefault()} type="text" /> är min",
                                <br />Inget annat kommer spela roll
                                <br /><input
                                    style={{ color: !wrong[4] ? 'red' : 'green', fontWeight: "bold" }}
                                    value={ans[4]}
                                    onChange={(e) => e.preventDefault()}
                                    type="text" /> har varandra, alltid tillsammans,
                                <br /><input
                                    style={{ color: !wrong[5] ? 'red' : 'green', fontWeight: "bold" }}
                                    value={ans[5]}
                                    onChange={(e) => e.preventDefault()} type="text" /> vet att jag går ingenstans
                                <br />Baby, <input
                                    style={{ color: !wrong[6] ? 'red' : 'green', fontWeight: "bold" }}
                                    value={ans[6]}
                                    onChange={(e) => e.preventDefault()}
                                    type="text" /> får säga vad de vill,
                                <br />Ingenting som <input
                                    style={{ color: !wrong[7] ? 'red' : 'green', fontWeight: "bold" }}
                                    value={ans[7]}
                                    onChange={(e) => e.preventDefault()}
                                    type="text" /> ska tänka på

                                <br /><br />Håll min hand, snart så är <input
                                    style={{ color: !wrong[8] ? 'red' : 'green', fontWeight: "bold" }}
                                    value={ans[8]}
                                    onChange={(e) => e.preventDefault()} type="text" /> långt bort
                                <br />Allting kommer lösa sig och
                                <br /> I din famn, gör <input
                                    style={{ color: !wrong[9] ? 'red' : 'green', fontWeight: "bold" }}
                                    value={ans[9]}
                                    onChange={(e) => e.preventDefault()} type="text" /> vad som helst för dig </p>

                        </div>
                        <div className='horizontal-divider'> </div>

                        <div className='english-area px-3'>
                            <p>Baby they can say whatever they want,
                                <br />Nothing you should think about
                                <br />Scream to the whole world that “you are mine”,
                                <br />Nothing else will matter
                                <br />We have each other, always together
                                <br />You know I'm not going nowhere
                                <br />Baby, they can say whatever they want,
                                <br />Nothing we should think about.


                                <br /><br /><br /><br />Take my hand, soon they are far away,
                                <br />Everything will turn out alright and
                                <br />in your arms, I will do anything for you</p>

                        </div>

                    </div>
                    <div className='button-sec'>
                        {
                            Data4[question].options.map((option) => {
                                return (
                                    <button
                                        key={option.id}
                                        onClick={() => {
                                            optionClicked(option.isCorrect)
                                        }} className='mx-3 px-5 btn vtn-primary '>
                                        {option.text}
                                    </button>
                                )
                            }
                            )
                        }
                    </div>
                    <div className='hint-area d-flex'>
                        <div className='solution pt-3'>
                            <Button disabled={solution} className='bg-warning text-dark py-2' onClick={() => {

                                handleOpen()
                                setSolution(true)
                            }}>SHOW SOLUTION</Button>
                            <Modal

                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>

                                    <Typography id="modal-modal-description" sx={{ mt: 2, fontFamily: 'Be Vietnam Pro ,sans-serif' }}>
                                        Baby, de får säga vad de vill,
                                        <br />Ingenting som du ska tänka på
                                        <br />Skrik till hela världen "Du är min",
                                        <br />Inget annat kommer spela roll
                                        <br />Vi har varandra, alltid tillsammans,
                                        <br />Du vet att jag går ingenstans
                                        <br />Baby, de får säga vad de vill,
                                        <br />Ingenting som vi ska tänka på

                                        <br />Håll min hand, snart så är de långt bort
                                        <br />Allting kommer lösa sig och
                                        <br />I din famn, gör jag vad som helst för dig
                                    </Typography>
                                </Box>
                            </Modal>

                        </div>




                    </div>

                </div>)



            }
            {result ?
                <div className='next mt-4'>
                    <button className='continue-button  btn-lg bg-warning'>
                        <Link className='btn-style' to='/e5'>CONTINUE</Link>
                    </button>
                </div> : null
            }
        </div>
    );
};

export default Quiz4;