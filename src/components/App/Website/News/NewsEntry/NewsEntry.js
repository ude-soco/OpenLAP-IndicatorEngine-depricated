import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import WatchLaterOutlined from '@material-ui/icons/WatchLaterOutlined';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    avatar: {
        margin: 10,
        width: 70,
        height: 70,
        borderRadius: '10%'
    },
    dateText: {
        fontSize: '1.1rem',
        marginRight: theme.spacing(1),
        marginBottom: '-3px'
    },
    divider: {
        marginBottom: '1.5rem',
        marginTop: '1.5rem',
    },
}));

const NewsEntry = (props) => {
    const classes = useStyles();
    const innerHtml = { __html: props.children }

    return <>
        <Grid container justify="flex-start" alignItems="flex-start">
            <Grid item xs="auto" >
                <Avatar src={process.env.PUBLIC_URL + props.imageURL} className={classes.avatar} />
            </Grid>
            <Grid item xs={true} >
                <Typography variant="h5">
                    {props.title}
                </Typography>
                <Box display="flex" mb={1}>
                    <Typography variant="subtitle2">
                        <WatchLaterOutlined className={classes.dateText} />{props.date}
                    </Typography>
                </Box>
                <Typography variant="body1" dangerouslySetInnerHTML={innerHtml} />
            </Grid>
        </Grid>
        {!props.hideRuler && <Divider variant="middle" className={classes.divider} />}
    </>;
}

export default NewsEntry;