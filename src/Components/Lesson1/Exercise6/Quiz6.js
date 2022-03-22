import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './exercise6.css'
import ReactAudioPlayer from 'react-audio-player';
import audio from '../../../audios/hej_c.mp3'
import { Link } from 'react-router-dom';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fbc556',

    boxShadow: 24,
    p: 4,


};
const Quiz6 = () => {
    const [solution, setSolution] = useState(false)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [wrong1, setWrong1] = useState(false)
    const [wrong2, setWrong2] = useState(false)
    const [score, setScore] = useState(0)
    const [result, SetResult] = useState(false)
    const [inputVal, setInputVal] = useState({
        input1: "",
        input2: "",
    })
    const expectedVal = {
        expVal1: "hej",
        expVal2: "tack",

    }
    const verifyResult = () => {
        if (inputVal.input1 === "" || inputVal.input2 === "")

            alert('please fill in inputs first ')
        else
            SetResult(true)
    }
    const SeeScore = () => {
        if (score > 2) {
            setScore(2)
        }
    }
    useEffect(() => {
        if (inputVal.input1 === expectedVal.expVal1) {
            setWrong1(false)
            setScore(score + 1)
            console.log(score)
        }
        else
            setWrong1(true)
    }, [inputVal.input1])
    useEffect(() => {
        if (inputVal.input2 === expectedVal.expVal2) {
            setWrong2(false)
            setScore(score + 1)
            console.log(score)
        }
        else
            setWrong2(true)
    }, [inputVal.input2])
    return (
        <div>
            {result ? (
                /* 4. Final Results */
                <div className="final-results pt-5 d-flex align-items-center">

                    <h2>
                        You scored {score}/2
                    </h2>
                    {
                        score < 4 ?
                            <img className='img-result img-fluid' src='https://i.ibb.co/R4vsyJp/retry.png'></img>
                            :
                            <img className='img-result img-fluid' src="https://i.ibb.co/gm1wrmM/well-done.png" alt="" />

                    }
                </div>

            ) :

                (<div className='page-6 pt-5'>
                    <h1 className='pt-2'>Fill in the gaps for the following conversation!</h1>
                    {/* <h3>Fill in the gaps for the following conversation!</h3> */}
                    <div className='audio-sec d-flex'>
                        <button className='audio-button'>
                            <ReactAudioPlayer
                                src={audio}
                                autoPlay
                                controls
                            />
                        </button>
                        {/* <img className='img-fluid image mx-5' src="https://i.ibb.co/27cLJbh/Whats-App-Image-2022-02-09-at-1-07-25-PM.jpg" alt=""></img> */}
                    </div>

                    <div className='conversation '>
                        <div className='guy d-flex'>
                            <img className='guy-img' src="https://i.ibb.co/HD1Ym9w/guy.png" alt="" />

                            <p className='mt-2 paragraph '><b>Hejsan! Kul att ses!</b><br />
                                Hey! Great to see you!</p>
                        </div>
                        <div className="d-flex girl">
                            <p className='mt-2 paragraph '><b> <input className='input-6b' type='text' style={{ color: wrong1 ? "red" : 'green', fontWeight: "bold" }}

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

                            /> , hur mår du?</b><br />
                                Hello, how are you?</p>
                            <img className='guy-img' src="https://i.ibb.co/D8BHLmV/girl.png" alt="" />
                        </div>
                        <div className='guy d-flex'>
                            <img className='guy-img' src="https://i.ibb.co/HD1Ym9w/guy.png" alt="" />

                            <p className='mt-2 paragraph'><b>Jo <input className='input-6b' type='text' style={{ color: wrong2 ? "red" : "green", fontWeight: "bold" }}

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

                            /> , det är bara bra.</b><br />
                                I'm well, thanks.</p>
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
                                        The numbers represent the position of the spaces <br /><br />
                                        1. Hej <br /> 2. tack

                                        <br /><br /><br /> NOTE: You can use "Hejsan" as hello as well.

                                    </Typography>
                                </Box>
                            </Modal>


                        </div>

                        <div className='ex6-next'>
                            <button onClick={() => {
                                verifyResult()
                                SeeScore()

                            }} className='continue-button  btn-lg'>
                                NEXT
                            </button>
                        </div>

                    </div>

                </div>)}
            {
                result ?
                    <div className='next mt-3'>
                        <button className='continue-button btn-lg bg-warning '

                        ><Link className='continue-btn-style' to='/e6b'>CONTINUE</Link></button>
                    </div> : null
            }

        </div>
    );
};

export default Quiz6;