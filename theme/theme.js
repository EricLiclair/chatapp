import { createTheme } from '@mui/material/styles';
import lightThemeColors from './lightcolors.json';
import darkThemeColors from './darkcolors.json';

const mode = 'light';
const theme = createTheme({
    palette: {
        mode: mode,
        ...(mode === 'light' ? lightThemeColors : darkThemeColors)
    },
    typography: {
        fontFamily: 'Poppins',
    },

    components: {
        MuiPaper: {
            defaultProps: {
                elevation: 0
            }
        },
        MuiTextField: {
            defaultProps: {
                sx: {
                    margin: '0 0 1rem 0'
                }
            }
        },
        MuiTooltip: {
            defaultProps: {
                arrow: true,
                placement: 'bottom-end'
            }
        },
        MuiButton: {
            defaultProps: {
                variant: 'contained',
                size: 'large',
            },
            styleOverrides: {
                root: {
                    height: 56,
                },
            },
        },
        // MuiAppBar: {
        //     defaultProps: {
        //         color: 'transparent',
        //         elevation: 0,
        //         position: 'static'
        //     }
        // }
    },
    shape: {
        borderRadius: 15,
    },
});

export default theme;