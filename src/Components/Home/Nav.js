import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import './nav.css'
import { Button } from '@mui/material';
const Nav = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className='d-flex home-contain  bg-dark '>
            <img className='logo mt-2 ml-1' src="https://i.ibb.co/qJG3vwd/logo.png" alt="" />
            <div className='home-nav'>
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <div className='home-bg mx-2 mt-2'> <Button sx={{ color: 'black', fontWeight: 600 }}><img className='img-fluid home-img mx-1' src='https://i.ibb.co/mqRdNd9/home.png'></img> Home</Button></div>
                    <div className='culture-bg mx-2 mt-2'> <Button sx={{ color: 'black', fontWeight: 600 }}><img className='img-fluid home-img mx-1' src=' https://i.ibb.co/9Hq27J7/song.png '></img> Song</Button></div>
                    <div className='culture-bg mx-2 mt-2'> <Button sx={{ color: 'black', fontWeight: 600, cursor: 'pointer' }}><img className='img-fluid home-img mx-1' src=' https://i.ibb.co/RcTxFjh/culture.png'></img> Culture</Button></div>
                    <div className='user-bg ml-5 mt-1'> <Button onClick={handleClick} sx={{ color: 'black', fontWeight: 600 }}><img className='img-fluid user-img mx-1' src='https://i.ibb.co/jJNwh6x/user.png'></img> Username</Button></div>



                </Box>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem>
                        <Avatar /> Profile
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <Avatar /> Logout
                    </MenuItem>
                </Menu>
            </div>
        </div>
    );
};

export default Nav;