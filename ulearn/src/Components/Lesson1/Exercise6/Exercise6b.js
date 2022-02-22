import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import Nav from '../Lesson1-nav/Nav';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './exercise6.css'
import ReactAudioPlayer from 'react-audio-player';
import audio from '../../../audios/hejda_c.mp3'
import { Link } from 'react-router-dom';
import Useauth from '../../../Hooks/Useauth';
import './exercise6.css'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fbc556',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,


};
const Exercise6b = () => {
    const [solution, setSolution] = useState(false)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { handlePercent, finishLession1 } = Useauth()
    const [wrong1, setWrong1] = useState(false)
    const [wrong2, setWrong2] = useState(false)
    const [score, setScore] = useState(0)
    const [result, SetResult] = useState(false)
    const [inputVal, setInputVal] = useState({
        input1: "",
        input2: "",
    })
    const expectedVal = {
        expVal1: "hejda",
        expVal2: "hejda",

    }
    const verifyResult = () => {
        if (inputVal.input1 === "" || inputVal.input2 === "")

            alert('please fill in inputs first ')
        else
            SetResult(true)
    }

    return (
        <div>
            <div className="d-flex">
                <Nav />
                <ProgressBar striped variant='warning' now={95}></ProgressBar>
                <p className='mt-1 mx-2' >6/6</p>
            </div>
            {result ? (
                /* 4. Final Results */
                <div className="final-results pt-5 ">

                    <h2>
                        You Scored {score}/2
                    </h2>
                    {
                        score < 4 ?
                            <img className='img-result img-fluid' src='https://i.ibb.co/R4vsyJp/retry.png'></img>
                            :
                            <img className='img-result img-fluid' src="https://i.ibb.co/gm1wrmM/well-done.png" alt="" />

                    }
                </div>

            ) :
                (<div className='page-6b'>
                    <h1 className='pt-2'>Basic Conversation-hej!</h1>
                    <h6>Fill in the gaps for the following conversation!</h6>
                    <div className='audio-sec2 d-flex'>
                        <img className='img-fluid image mx-4' src="https://i.ibb.co/27cLJbh/Whats-App-Image-2022-02-09-at-1-07-25-PM.jpg" alt=""></img>
                        <button className='audio-button'>
                            <ReactAudioPlayer
                                src={audio}
                                autoPlay
                                controls
                            />
                        </button>

                    </div>

                    <div className='conversation-2 '>
                        <div className='guy d-flex'>
                            <img className='guy-img' src="https://i.ibb.co/HD1Ym9w/guy.png" alt="" />

                            <p className='mt-4 paragraph '><input className='input-6b' type='text' style={{ color: wrong1 ? "red" : 'green', fontWeight: "bold" }}

                                name='input1'
                                value={inputVal.input1}
                                onChange={(e) => {

                                    setInputVal({ ...inputVal, input1: e.target.value })
                                    if (inputVal.input1 === expectedVal.expVal1) {
                                        setWrong1(false)
                                        setScore(score + 1)
                                        console.log(score)
                                    }
                                    else
                                        setWrong1(true)
                                }}

                            /> ,<br />
                                Goodbye!</p>
                        </div>
                        <div className="d-flex girl">
                            <p className='mt-4 paragraph '><input className='input-6b' type='text' style={{ color: wrong2 ? "red" : "green", fontWeight: "bold" }}

                                name='input2'
                                value={inputVal.input2}
                                onChange={(e) => {
                                    setInputVal({ ...inputVal, input2: e.target.value })
                                    if (inputVal.input2 === expectedVal.expVal2) {
                                        setWrong2(false)
                                        setScore(score + 1)
                                        console.log(score)
                                    }
                                    else
                                        setWrong2(true)
                                }}

                            /> ! vi ses!  <br />
                                Bye, see you later</p>
                            <img className='guy-img' src="https://i.ibb.co/D8BHLmV/girl.png" alt="" />
                        </div>

                    </div>
                    <div className='hint-area d-flex '>
                        <div className='solution pt-3'>
                            <Button disabled={solution} className='bg-warning text-dark py-2' onClick={() => {
                                handleOpen()
                                setSolution(true)
                            }}>Show Solution</Button>
                            <Modal

                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"

                            >
                                <Box sx={style}>

                                    <Typography id="modal-modal-description" >
                                        The Numbers represent the position of the spaces <br />
                                        1.hej da  <br /> 2.hej da

                                    </Typography>
                                </Box>
                            </Modal>


                        </div>
                        <div className='continue'>
                            <button onClick={verifyResult} className='continue-button  btn-lg'>
                                NEXT
                            </button>
                        </div>

                    </div>

                </div>


                )}
            {
                result ?
                    <div className='continue mt-3 ex5-result next'>
                        <button
                            onClick={() => {
                                handlePercent()
                                finishLession1()
                            }
                            }
                            className='continue-button btn-lg bg-warning '

                        ><Link className='continue-btn-style' to='/'>CONTINUE</Link></button>
                    </div> : null
            }

        </div >
    );
};

export default Exercise6b;