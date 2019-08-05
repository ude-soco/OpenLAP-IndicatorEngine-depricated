import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import makeStyles from '@material-ui/core/styles/makeStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles(theme => ({
    divider: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        backgroundColor: theme.palette.primary.dark,
    },
}));

const Footer = () => {
    const classes = useStyles();

    return <>
        <Divider className={classes.divider} />
        <Grid container alignItems="flex-start" justify="space-around" >
            <Grid item xs={12} sm="auto">
                <Box mt={{ xs: 3, sm: 0 }} >
                    <a href="https://www.uni-due.de/soco/" target="_blank" rel="noopener noreferrer">
                        <img height={80} src={process.env.PUBLIC_URL + '/images/soco-logo.png'} alt="SoCo Logo" />
                    </a>
                </Box>
            </Grid>
            <Grid item xs={12} sm="auto">
                <Box mt={{ xs: 3, sm: 0 }} display="block">
                    <strong>Related Works</strong>
                    <List dense={true}>
                        <ListItem><a href="http://www.elearnspace.org/blog/wp-content/uploads/2016/02/ProposalLearningAnalyticsModel_SoLAR.pdf" target="_blank" rel="noopener noreferrer">SoLAR</a></ListItem>

                        <ListItem><a href="https://www.apereo.org/communities/learning-analytics-initiative" target="_blank" rel="noopener noreferrer">Apereo LAI</a></ListItem>
                        <ListItem><a href="https://analytics.jiscinvolve.org/wp/2015/04/04/explaining-jiscs-open-learning-analytics-architecture/" target="_blank" rel="noopener noreferrer">Jisc OLAA</a></ListItem>
                    </List>
                </Box>
            </Grid>
            <Grid item xs={12} sm="auto">
                <Box mt={{ xs: 3, sm: 0 }} display="block">
                    <strong>Standards & Specifications</strong>
                    <List dense={true}>
                        <ListItem><a href="https://www.imsglobal.org/activity/caliperram" target="_blank" rel="noopener noreferrer">IMS Caliper</a></ListItem>

                        <ListItem><a href="https://www.adlnet.gov/adl-research/performance-tracking-analysis/experience-api/" target="_blank" rel="noopener noreferrer">xAPI</a></ListItem>
                    </List>
                </Box>
            </Grid>
        </Grid>
    </>;
};

export default Footer;