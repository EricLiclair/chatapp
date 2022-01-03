import { ChevronLeft, ForkLeft, MoreVert, Search } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import TabContext from '../../context/tabs/tabcontext';

export default function Navbar() {
    const { tab } = useContext(TabContext);
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    {tab === 2 && <IconButton color="inherit" edge='start' aria-label="search" sx={{ mr: 2 }}>
                        <ChevronLeft />
                    </IconButton>}
                    <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
                        ChatApp
                    </Typography>
                    <IconButton color="inherit" aria-label="search">
                        <Search />
                    </IconButton>
                    <IconButton edge="end" color="inherit" aria-label="more-options" >
                        <MoreVert />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
