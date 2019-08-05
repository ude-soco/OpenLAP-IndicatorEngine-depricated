import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    image: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '50%'
    },
    card: {
        backgroundColor: 'transparent'
    }
}));

const Member = (props) => {
    const classes = useStyles();

    return <>
        <Box my={2}>
            <Card elevation={0} className={classes.card}>
                <img
                    className={classes.image}
                    alt={props.name}
                    src={process.env.PUBLIC_URL + `/images/team/${props.imageFile}`} />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        {props.name}
                    </Typography>
                    <Typography variant="body1">
                        {props.affiliation}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    </>;
}

export default Member;