import { Box } from '@mui/material';
// theming
import { ThemeProvider } from '@mui/material/styles';
// views
import { Footer, Navbar } from '../components';
import '../styles/globals.css';
import theme from '../theme/theme';



function MyApp({ Component, pageProps }) {
    return <ThemeProvider theme={theme}>
        <Box sx={{ width: '100vw', maxWidth: 425, border: 'solid 1px black' }}>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </Box>
    </ThemeProvider>
}

export default MyApp
