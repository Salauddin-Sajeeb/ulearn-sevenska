import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
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
                    <div className='home-bg mx-4 mt-2'> <Button sx={{ color: 'black', fontWeight: 600 }}><img className='img-fluid home-img mx-1' src=' https://i.ibb.co/SQ1vmsv/home.png'></img> Home</Button></div>
                    <div className='home-bg mx-4 mt-2'> <Button sx={{ color: 'black', fontWeight: 600 }}><img className='img-fluid home-img mx-1' src='https://i.ibb.co/FxCnndZ/song.png'></img> Song</Button></div>
                    <div className='home-bg mx-4 mt-2'> <Button sx={{ color: 'black', fontWeight: 600 }}><img className='img-fluid home-img mx-1' src='https://i.ibb.co/FxCnndZ/song.png'></img> Culture</Button></div>

                    <Tooltip title="Account settings">
                        <IconButton
                            onClick={handleClick}
                            size="medium"
                            sx={{ ml: 10 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                            <Typography sx={{ pl: 1, width: 42, height: 30, color: 'white', mt: 1 }}>UserName</Typography>

                        </IconButton>
                    </Tooltip>
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
                    <MenuItem>
                        <Avatar /> User Name
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