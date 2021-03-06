
import './exercise5.css'
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
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
    borderRadius: '5%',
    fontWeight: '700'

};
const Quiz5 = () => {
    const [solution, setSolution] = useState(false)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [wrong1, setWrong1] = useState(false)
    const [wrong2, setWrong2] = useState(false)
    const [wrong3, setWrong3] = useState(false)
    const [wrong4, setWrong4] = useState(false)
    const [wrong5, setWrong5] = useState(false)
    const [score, setScore] = useState(0)
    const [result, SetResult] = useState(false)

    const [inputVal, setInputVal] = useState({
        input1: "",
        input2: "",
        input3: '',
        input4: '',
        input5: ''
    })
    const expectedVal = {
        expVal1: "jag",
        expVal2: "vi",
        expVal3: "jag",
        expVal4: "vi",
        expVal5: "jag",
    }

    const verifyResult = () => {
        if (inputVal.input1 === "" || inputVal.input2 === "" || inputVal.input3 === "" || inputVal.input4 === "" || inputVal.input5 === "")

            alert('please fill in inputs first ')
        else
            SetResult(true)
    }
    useEffect(() => {
        if (inputVal.input1 === expectedVal.expVal1) {
            setWrong1(false)
            setScore(score + 1)
            if (score > 1) {
                setScore(1)
            }
            console.log(score)
        }

        else
            setWrong1(true)
    }, [inputVal.input1])
    useEffect(() => {
        if (inputVal.input2 === expectedVal.expVal2) {
            setWrong2(false)
            setScore(score + 1)
            if (score > 2) {
                setScore(2)
            }
            console.log(score)
        }
        else
            setWrong2(true)
    }, [inputVal.input2])
    useEffect(() => {
        if (inputVal.input3 === expectedVal.expVal3) {
            setWrong3(false)
            setScore(score + 1)
            if (score > 3) {
                setScore(3)
            }
            console.log(score)
        }
        else
            setWrong3(true)
    }, [inputVal.input3])

    useEffect(() => {
        if (inputVal.input4 === expectedVal.expVal4) {
            setWrong4(false)
            setScore(score + 1)
            if (score > 4) {
                setScore(4)
            }

            console.log(score)
        }
        else
            setWrong4(true)
    }, [inputVal.input4])
    useEffect(() => {
        if (inputVal.input5 === expectedVal.expVal5) {
            setWrong5(false)
            setScore(score + 1)
            if (score > 5) {
                setScore(5)
            }

            console.log(score)
        }

        else
            setWrong5(true)

    }, [inputVal.input5])


    return (
        <div>
            {result ? (
                /* 4. Final Results */
                <div className="final-results pt-5 d-flex align-items-center">

                    <h2>
                        You scored {score}/5
                    </h2>
                    {
                        score < 6 ?
                            <img className='img-result img-fluid' src='https://i.ibb.co/R4vsyJp/retry.png'></img>
                            :
                            <img className='img-result img-fluid' src="https://i.ibb.co/gm1wrmM/well-done.png" alt="" />

                    }
                </div>

            ) : (<div className='exercise-5'>
                <h1 className='pt-2 '>Fill in the gaps by typing the correct subject pronouns </h1>
                <div className='video '>
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=aVNuoeh0Ovw'
                        height='180px'
                        width='300px'
                        controls
                    />
                </div>

                {/* <h4 className='mt-5 pt-5'>Fill in the gaps with the correct subject pronouns</h4> */}

                <div className='text-area d-flex  '>
                    <div className='blank-area px-3'>


                        <input className='input-6b' type='text' style={{ color: wrong1 ? "red" : 'green', fontWeight: "bold" }}

                            name='input1'
                            value={inputVal.input1}
                            onChange={(e) => {

                                setInputVal({ ...inputVal, input1: e.target.value })

                            }}

                        />
                         ska ??lska dig tills mitt hj??rta g??r under
                        <br />Uti alla stunder, med blixtar och dunder
                        <br />Lova mig att <input className='input-6b' type='text' style={{ color: wrong2 ? "red" : "green", fontWeight: "bold" }}

                            name='input2'
                            value={inputVal.input2}
                            onChange={(e) => {
                                setInputVal({ ...inputVal, input2: e.target.value })
                            }}

                        /> r??knar sekunder
                        <br />??h, baby, <input className='input-6b' type='text' style={{ color: wrong3 ? "red" : "green", fontWeight: "bold" }}

                            name='input3'
                            value={inputVal.input3}
                            onChange={(e) => {
                                setInputVal({ ...inputVal, input3: e.target.value })
                                if (inputVal.input3 === expectedVal.expVal3) {
                                    setWrong3(false)
                                    setScore(score + 1)
                                    console.log(score)

                                }
                                else
                                    setWrong3(true)
                            }}

                        /> ??r alltid med dig
                        <br />??lska dig tills mitt hj??rta g??r under
                        <br />Uti alla stunder, med blixtar och dunder
                        <br />Lova mig att <input className='input-6b' type='text' style={{ color: wrong4 ? "red" : "green", fontWeight: "bold" }}

                            name='input4'
                            value={inputVal.input4}
                            onChange={(e) => {
                                setInputVal({ ...inputVal, input4: e.target.value })
                                if (inputVal.input4 === expectedVal.expVal4) {
                                    setWrong4(false)
                                    setScore(score + 1)
                                    console.log(score)
                                }
                                else
                                    setWrong4(true)
                            }}

                        /> r??knar sekunder
                        <br />F??r, baby, <input className='input-6b' type='text' style={{ color: wrong5 ? "red" : "green", fontWeight: "bold" }}

                            name='input5'
                            value={inputVal.input5}
                            onChange={(e) => {
                                setInputVal({ ...inputVal, input5: e.target.value })

                            }}

                        /> ??r alltid med dig


                    </div>
                    <div className='horizontal-divider'>

                    </div>
                    <div className='english-area px-3'>
                        I will love you until my heart gives in,
                        <br />Throughout every moment, with lightning and thunder
                        <br />Promise me we'll count the seconds
                        <br />Ah, baby, I am always with you
                        <br />Love you until my heart gives in,
                        <br />Throughout every moment, with lightning and thunder
                        <br />Promise me we'll count the seconds
                        <br />Because, baby, I am always with you
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

                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Jag ska ??lska dig tills mitt hj??rta g??r under <br />
                                    Uti alla stunder, med blixtar och dunder <br />
                                    Lova mig att vi r??knar sekunder <br />
                                    ??h, baby, jag ??r alltid med dig <br />
                                    ??lska dig tills mitt hj??rta g??r under <br />
                                    Uti alla stunder, med blixtar och dunder <br />
                                    Lova mig att vi r??knar sekunder <br />
                                    F??r, baby, jag ??r alltid med dig


                                </Typography>
                            </Box>
                        </Modal>


                    </div>
                    <div className='next'>
                        <button onClick={() => {

                            verifyResult()

                        }} className='continue-button  btn-lg'>
                            NEXT
                        </button>
                    </div>
                </div>

            </div>)}
            {
                result ?
                    <div className='next mt-3'>
                        <button className='continue-button btn-lg bg-warning  '

                        ><Link className='continue-btn-style' to='/e6'>CONTINUE</Link></button>
                    </div> : null
            }
        </div>

    );
};

export default Quiz5;