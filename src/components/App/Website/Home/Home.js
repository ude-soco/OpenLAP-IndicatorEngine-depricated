import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import NewsEntry from '../News/NewsEntry/NewsEntry';

const useStyles = makeStyles(theme => ({
    banner: {
        backgroundImage: 'url("/images/main-banner.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'right top',
    },
    bannerTextContainer: {
        backgroundColor: 'rgba(206, 206, 206, 0.6)',
        borderRadius: '2rem',
        padding: '1rem 1rem',
        margin: '4rem 1rem',
        fontFamily: 'Oswald Light',
        [theme.breakpoints.down('sm')]: {
            margin: '4rem 1rem',
        },
        '& h1': {
            color: theme.palette.primary.dark,
            fontSize: '5rem',
            margin: '0rem',
            [theme.breakpoints.down('sm')]: {
                fontSize: '3rem',
            },
            [theme.breakpoints.down('xs')]: {
                fontSize: '2rem',
            }
        },
        '& h3': {
            color: theme.palette.text.primary,
            fontSize: '3rem',
            margin: '0rem',
            [theme.breakpoints.down('sm')]: {
                fontSize: '2rem',
            },
            [theme.breakpoints.down('xs')]: {
                fontSize: '1.2rem',
            }
        }
    },
    textEmphasised: {
        fontSize: '2rem',
        lineHeight: '3rem',
        color: theme.palette.text.primary,
        marginBottom: '0rem',
        '& a': {
            textDecoration: 'none'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem',
            lineHeight: '2.5rem',
        },
    },
    divider: {
        marginTop: '3rem',
        marginBottom: '3rem',
        backgroundColor: theme.palette.primary[100]
    },
    card: {
        backgroundColor: 'transparent'
    },
    media: {
        height: 220,
    },
}));


const Home = (props) => {
    const classes = useStyles();

    const data = [
        { imageURL: "/images/news/rwth.png", date: "14/12/2018", title: "Doctoral dissertation publication in RWTH Aachen Univeristy", desc: "Doctoral dissertation titled <a href='/publications?select=rwth18'>OpenLAP: A User-Centered Open Learning Analytics Platform</a> of Dr. Arham Muslim is published in RWTH Aachen Univeristy." },
        { imageURL: "/images/news/jla.jpg", date: "20/07/2018", title: "Publication in Journal of Learning Analytics", desc: "<a href='/publications?select=jla18'>A Modular and Extensible Framework for Open Learning Analytics</a> paper is published in the <i>Journal of Learning Analytics</i>  VOL 5 NO 1 (2018)." },
        { imageURL: "/images/news/csedu17.jpeg", date: "20/04/2017", title: "Presentation in CSEDU 2017", desc: "<a href='/publications?select=csedu17'>The Goal - Question - Indicator Approach for Personalized Learning Analytics</a> paper is presented at the <i>9th International Conference on Computer Supported Education (CSEDU)</i> 2017." }
    ];

    const news = [];

    for (const [index, value] of data.entries()) {
        let hideRuler = index >= data.length - 1 ? { hideRuler: true } : {};
        news.push(<NewsEntry key={index} imageURL={value.imageURL} date={value.date} title={value.title} {...hideRuler}>{value.desc}</NewsEntry>)
    }

    return <>
        <Grid container justify="flex-start" alignItems="center" className={classes.banner}>
            <Grid item >
                <Box className={classes.bannerTextContainer}>
                    <h3>Define your own analysis with</h3>
                    <h1>Open Learning Analytics Platform (OpenLAP)</h1>
                </Box>
            </Grid>
        </Grid>
        <Container fixed>
            <Box my={3}>
                <Typography gutterBottom variant="h4">
                    ABOUT THE PROJECT
                </Typography>
            </Box>
            <Box>
                <p className={classes.textEmphasised}>OpenLAP follows a <strong>user-centric</strong> approach to engage end users in flexible definition and dynamic generation of indicators, which can <strong>visualize anywhere</strong>. To meet the requirements of diverse users, OpenLAP provides a <strong>modular and extensible</strong> <Link to="/architecture">architecture</Link> that allows the easy integration of new analytics modules, analytics methods, and visualization techniques.</p>
            </Box>
            <Divider className={classes.divider} />
            <Box mb={3}>
                <Typography gutterBottom variant="h4">
                    FEATURES
                </Typography>
            </Box>
            <Grid container spacing={2}>
                <Grid item md={4} >
                    <Card elevation={0} className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image={process.env.PUBLIC_URL + '/images/user-centric.jpg'}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                User-Centric
                                </Typography>
                            <Typography variant="body1">
                                Provide intuitive and interactive UI to self-define indicators that help users achieve their diverse objectives.
                                </Typography>
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item md={4} >
                    <Card elevation={0} className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image={process.env.PUBLIC_URL + '/images/visualize.jpg'}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Visualize Anywhere
                                </Typography>
                            <Typography variant="body1">
                                Embed HTML and JavaScript based indicators in any web-based client application to provide analytics in context.
                                </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={4} >
                    <Card elevation={0} className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image={process.env.PUBLIC_URL + '/images/flexible.jpg'}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Modular and Extensible
                                </Typography>
                            <Typography variant="body1">
                                Plug-in new analytics objectives, analytics methods, and visualization techniques to meet the requirements of different stakeholders.
                                </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Box mb={3}>
                <Typography gutterBottom variant="h4">
                    LATEST NEWS & EVENTS
                </Typography>
            </Box>
            {news}
        </Container>
    </>;
}

export default Home;

