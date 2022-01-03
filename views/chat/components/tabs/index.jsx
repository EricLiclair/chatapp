import styled from '@emotion/styled';
import { Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

export const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    borderRadius: '0 0 15px 15px',
    boxShadow: 'rgb(0 0 0 / 10%) 0px 20px 25px, rgb(0 0 0 / 4%) 0px 10px 10px',
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        width: '60%',
        backgroundColor: "#fff",
    },
}));

export const StyledTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    color: theme.palette.background.paper,
    '&.Mui-selected': {
        color: '#fff',
    },
    '&.Mui-focusVisible': {
        backgroundColor: theme.palette.secondary.main,
    },
}));

export const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}