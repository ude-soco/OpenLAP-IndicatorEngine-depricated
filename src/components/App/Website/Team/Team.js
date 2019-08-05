import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import PageTitle from '../../Common/PageTitle/PageTitle';
import Member from './Member/Member';

const useStyles = makeStyles(theme => ({
    divider: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        backgroundColor: theme.palette.primary.dark,
    },
}));

const Team = () => {
    const classes = useStyles();
    const data = [
        { name: "Abdul-Rahman Khan", affiliation: "Student at University Duisburg-Essen", imageFile: "male.png" },
        { name: "Muhammad Faizan Riaz", affiliation: "Student at University Duisburg-Essen", imageFile: "male.png" },
        { name: "Bilawal Wajid Ali", affiliation: "Student at University Duisburg-Essen", imageFile: "male.png" },
        { name: "Sammar Javed", affiliation: "M.Sc. University Duisburg-Essen", imageFile: "male.png" },
        { name: "Memoona Mughal", affiliation: "M.Sc. RWTH Aachen University", imageFile: "female.png" },
        { name: "Oscar Eduardo Barrios Varela", affiliation: "M.Sc. RWTH Aachen University", imageFile: "barrios.jpg" },
        { name: "Muhammad Bassim Bashir", affiliation: "M.Sc. RWTH Aachen University", imageFile: "male.png" },
        { name: "Tanmaya Mahapatra", affiliation: "M.Sc. RWTH Aachen University", imageFile: "male.png" },
    ];

    const students = [];

    for (const [index, value] of data.entries()) {
        students.push(<Grid key={index}  item md={3} ><Member name={value.name} affiliation={value.affiliation} imageFile={value.imageFile} /></Grid>);
    }

    return <>
        <PageTitle main="Team" />
        <Container fixed>
            <Box my={3}>
                <Typography gutterBottom variant="h4">
                    MANAGERS
                </Typography>
            </Box>
            <Grid container justify="space-around" spacing={2}>
                <Grid item md={4} >
                    <Member name="Prof. Dr. Mohamed Amine Chatti" affiliation="Professor at University Duisburg-Essen" imageFile="chatti.jpg" />
                </Grid>
                <Grid item md={4} >
                    <Member name="Dr. Arham Muslim" affiliation="Researcher at University Duisburg-Essen" imageFile="muslim.jpg" />
                </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Box my={3}>
                <Typography gutterBottom variant="h4">
                    STUDENTS
                </Typography>
            </Box>
            <Grid container justify="flex-start" spacing={2}>
                {students}
            </Grid>
        </Container>
    </>;
}

export default Team;