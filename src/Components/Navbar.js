import React, { useState } from 'react';
import './Navbar.css'
import { HiOutlineBars3 } from "react-icons/hi2";
import { Drawer, Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: "Home",
        },
        {
            text: "About",
        },
        {
            text: "Invest & Earn",
        },
        {
            text: "Gallery",
        },
        {
            text: "FAQs",
        },
    ];


    return (

        <nav>
            <div className="heading">
                <h3>AGRIPURE FARMS</h3>
            </div>
            <div className="nav-links-container">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Invest & Earn</a>
                <a href="">Gallery</a>
                <a href="">FAQs</a>
            </div>
            <div className="nav-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>
            <Drawer open={openMenu} onClick={() => setOpenMenu(false)} anchor="right">
                <Box sx={{ width: 150 }}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}>
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </nav>
    )
}

export default Navbar