import { Box, Paper } from '@mui/material';
// theming
import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
// views
import { Footer, Navbar } from '../components';
// context
import TabContext from '../context/tabs/tabcontext';
import '../styles/globals.css';
import theme from '../theme/theme';



function MyApp({ Component, pageProps }) {
    const [tab, setTab] = useState(0);

    // only three tabs:
    const tabs = [
        {
            tabName: 'All Chats',
            tabView: 'All chats view'
        },
        {
            tabName: 'All Users',
            tabView: 'All Users view'
        },
        {
            tabName: 'Particular Chat',
            tabView: 'Particular Chat view'
        },
    ]
    return <ThemeProvider theme={theme}>
        <Paper sx={{ width: '100vw', maxWidth: 425 }}>
            <TabContext.Provider value={{ tab, tabs, setTab }}>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </TabContext.Provider>
        </Paper>
    </ThemeProvider>
}

export default MyApp
