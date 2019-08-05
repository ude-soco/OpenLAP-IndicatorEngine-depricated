import React from 'react';
import { NavLink } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import makeStyles from '@material-ui/core/styles/makeStyles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    appBar: {
        fontSize: '1.75rem',
        zIndex: 1350,
        '&.MuiPaper-elevation0':{
            backgroundColor: theme.palette.background.default,
        },
        '&.MuiPaper-elevation4':{
            backgroundColor: theme.palette.background.secondary,
        }
    },
    drawer: {
        fontSize: '1.5rem',
        '& .MuiDrawer-paperAnchorTop': { top: '55px' }

    },
    navItems: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        },
        '& a': {
            color: theme.palette.primary.dark,
            textDecoration: 'none'
        },
        '& a:hover, & a.active': {
            color: theme.palette.primary.light
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    flexGrow: {
        flexGrow: 1,
    },
}));

const RouteLink = React.forwardRef((props, ref) => (
    <NavLink innerRef={ref} {...props} />
));

const Header = props => {
    const classes = useStyles();

    const [state, setState] = React.useState({
        drawer: false
    });

    const toggleDrawer = () => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) { return; }
        setState({ ...state, drawer: !state.drawer });
    };

    const menuList = (isDrawer) => (
        <List className={classes.navItems}>
            {[{ title: 'News', url: '/news' }, { title: 'Architecture', url: '/architecture' }, { title: 'Publications', url: '/publications' }, { title: 'Team', url: '/team' }].map((entry) => isDrawer ?
                (<RouteLink onClick={toggleDrawer()} key={entry.title} to={entry.url}><ListItem button >{entry.title}</ListItem></RouteLink>) :
                (<RouteLink key={entry.title} to={entry.url}><ListItem >{entry.title}</ListItem></RouteLink>))}
        </List>
    );

    return <>
        <Drawer className={classes.drawer} anchor="top" open={state.drawer} onClose={toggleDrawer()}>
            {menuList(true)}
        </Drawer>
        <ElevationScroll {...props}>
            <AppBar className={classes.appBar} position="sticky" color="default">
                <Toolbar>
                    <RouteLink to="/">
                        <Box mt={1}>
                            <img src={process.env.PUBLIC_URL + '/images/openlap-logo.png'} height={40} alt="OpenLAP Logo" />
                        </Box>
                    </RouteLink>
                    <Typography className={classes.flexGrow} />
                    <Box display={{ xs: 'none', md: 'flex' }} >
                        {menuList(false)}
                    </Box>
                    <Box display={{ sm: 'flex', md: 'none' }} >
                        <IconButton onClick={toggleDrawer()} edge="start">
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    </>;
}

export default Header;