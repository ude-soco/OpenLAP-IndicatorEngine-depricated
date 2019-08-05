
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
    title: {
        backgroundImage: 'url("/images/title-banner.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'right top',
        marginBottom: '2rem',
    },
    bannerTextContainer: {
        padding: '1rem',
        fontFamily: 'Oswald Light',
        '& h1': {
            color: theme.palette.primary.dark,
            fontSize: '2.5rem',
        }
    },
}));

const PageTitle = (props) => {
    const classes = useStyles();

    return <>
        <Grid container justify="flex-start" alignItems="center" className={classes.title}>
            <Grid item >
                <Box className={classes.bannerTextContainer}>
                    <h1 className="main-text">{props.main}</h1>
                </Box>
            </Grid>
        </Grid>

    </>;
}

export default PageTitle;