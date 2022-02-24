import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Nav from '../Lesson1-nav/Nav';
import { ProgressBar } from 'react-bootstrap';
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
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '5%'
};

const Exercise4 = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [ans, setAns] = useState([])
    const [wrong, setWrong] = useState(false)
    const [rightAns, setRightAns] = useState({
        one: "",
        two: "",
        three: "",
        four: "",
        five: "",
        six: "",
        seven: "",
        eight: "",
        nine: "",
        ten: ""
    })
    const answers = [
        { val: "de" },
        { val: "de" },
        { val: "du" },
        { val: "du" },
        { val: "vi" },
        { val: "du" },
        { val: "de" },
        { val: "vi" },
        { val: "de" },
        { val: "jag" },
    ]
    useEffect(() => {
        setAns({ ...ans, answers })
    }, [])

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setRightAns({ ...rightAns, [name]: value })
    }

    const submitAnswer = () => {
        let item = answers.map(itm => {
            return itm
        });
        const { one, two, three } = rightAns;

        for (let it of answers) {
            switch (it) {
                case one:
                    if (true) {
                        console.log("answer1")
                    }
                    else {
                        console.log("wrong answer1")

                    }
                    break;
                case "answer2":
                    console.log("answer2..")
                    break;
                case "answer3":
                    console.log("answer3...")
                    break;
                default:
                    console.log("blank...")
            }
        }
    }

    const handleRightAnswer = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setAns({ ...ans, [name]: value })
    }


    const handleAnswer = (e) => {
        let item = answers.map(itm => {
            return itm.name
        });
        let name = e.target.name;
        let value = e.target.value;
        console.log(item)

        switch (name) {
            case 'one':
                if (name !== "one") {
                    setWrong(true)
                }
                setRightAns({ ...rightAns, [name]: value })
                break;
            case 'two':
                setRightAns({ ...rightAns, [name]: value })
                break;
            case 'three':
                setRightAns({ ...rightAns, [name]: value })
                break;
            default:
                console.log("blank....")
        }

    }




    return (
        <div>
            <div className="d-flex">
                <Nav />
                <ProgressBar striped variant='warning' now={80}></ProgressBar>
                <p className='mt-1 mx-2' >4/6</p>
            </div>
            <div className='exercise-4'>
                <h1 className='pt-4'>Myra Granberg</h1>
                <div className='video'>
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=zFw-zYKO2rg'
                        height='160px'
                        width='530px'
                        controls
                    />
                </div>

                <h4 className='mt-1 pt-5'>Fill in the gaps with the correct subject pronouns</h4>

                <div className='text-area d-flex '>
                    <div className='blank-area px-3'>
                        Baby,<input
                            style={{ borderBottom: wrong ? "2px solid red" : "2px solid green" }}
                            type="text" name="one"
                            readOnly value={rightAns.one}
                        /> får säga vad <input type="text" /> vill,
                        Ingenting som <input type="text" />  ska tänka på
                        Skrik till hela världen "<input type="text" /> är min",
                        Inget annat kommer spela roll
                        <input type="text" /> har varandra, alltid tillsammans,
                        <input type="text" /> vet jag går ingenstans
                        Baby, <input type="text" /> får säga vad de vill,
                        Ingenting som <input type="text" /> ska tänka på

                        Håll min hand, snart så är <input type="text" /> långt bort
                        Allting kommer lösa sig och
                        I din famn, gör <input type="text" /> vad som helst för dig



                    </div>
                    <div className='horizontal-divider'>

                    </div>
                    <div className='english-area px-3'>
                        Baby they can say whatever they want,
                        Nothing you should think about
                        Scream to the whole world that “you are mine”,
                        Nothing else will matter
                        We have each other, always together
                        You know I'm not going nowhere
                        Baby, they can say whatever they want,
                        Nothing we should think about.


                        Take my hand, soon they are far away,
                        Everything will turn out alright and
                        in your arms, I will do anything for you

                    </div>

                </div>
                <div className='button-sec'>
                    <div>
                        <button onClick={handleAnswer} className='btn btn-secondary mx-5 px-5 '>jag</button>
                        <button className='btn btn-secondary mx-5 px-5'>de</button>
                        <button className='btn btn-secondary mx-5 px-5'>hon</button>
                        <button className='btn btn-secondary mx- px-5'>vi</button>
                        <button className='btn btn-secondary mx-5 px-5'>de</button>
                    </div>
                </div>
                <div className='hint-area d-flex'>
                    <div className='solution pt-3'>
                        <Button className='bg-warning text-dark py-2' onClick={handleOpen}>Show Solution</Button>
                        <Modal

                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>

                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Baby, de får säga vad de vill,
                                    Ingenting som du ska tänka på
                                    Skrik till hela världen "Du är min",
                                    Inget annat kommer spela roll
                                    Vi har varandra, alltid tillsammans,
                                    Du vet jag går ingenstans
                                    Baby, de får säga vad de vill,
                                    Ingenting som vi ska tänka på

                                    Håll min hand, snart så är de långt bort
                                    Allting kommer lösa sig och
                                    I din famn, gör jag vad som helst för dig
                                </Typography>
                            </Box>
                        </Modal>

                    </div>

                    <div className='continue-section'>
                        <button className='continue-button  btn-lg'>
                            <Link className='btn-style' to='/e5'>Continue</Link>
                        </button>
                    </div>


                </div>

            </div>
        </div>

    );
};

export default Exercise4;