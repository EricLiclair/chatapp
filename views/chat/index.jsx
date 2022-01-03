import { Box, Tab, Tabs } from '@mui/material';
import Head from 'next/head';
import { useContext } from 'react';
import SwipeableViews from 'react-swipeable-views';
import TabContext from '../../context/tabs/tabcontext';
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import { StyledTabs, StyledTab, TabPanel } from './components/tabs';

export default function Chat() {
    const { tab, tabs, setTab } = useContext(TabContext);
    return (
        <div>
            <Head>
                <title>Chat App</title>
                <meta name="description" content="Text Application Built with Firebase, Next & MUI" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Box>
                    <StyledTabs
                        value={tab}
                        onChange={(e, val) => setTab(val)}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        {tabs.slice(0, 2).map((tabElem, idx) => <StyledTab key={idx} label={tabElem.tabName} />)}
                    </StyledTabs>
                    <SwipeableViews
                        // axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={tab}
                        onChangeIndex={(val) => setTab(val)}
                    >
                        {tabs.map((tabElem, idx) => <TabPanel key={idx} value={tab} index={idx}>{tabElem.tabView}</TabPanel>)}
                    </SwipeableViews>
                </Box>
            </main>
        </div>
    )
}
