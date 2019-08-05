import { createMuiTheme } from '@material-ui/core/styles';
// import lightBlue from '@material-ui/core/colors/lightBlue';
// import blue from '@material-ui/core/colors/blue';

const primaryMain = '#2955d9';
const secondaryMain = '#29b6f6';


export default createMuiTheme({
    palette: {
        primary: {
            main: primaryMain
        },
        secondary: {
            main: secondaryMain
        },
        background: {
            secondary: '#ebebeb',
        },
        text: {
            primary: '#474749',
            secondary: '#727177',
        }
    },
    typography: {
    },
    overrides: {
        MuiTypography: {
            h4: {
                color: primaryMain
            },
            h5: {
                color: secondaryMain
            },
            subtitle2:{
                color:'#727177',
            },
            body1:{
                marginBottom: '1rem'
            }
        }
    }
});