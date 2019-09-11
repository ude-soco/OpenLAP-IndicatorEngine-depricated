import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';

import PageTitle from '../../Common/PageTitle/PageTitle';

const useStyles = makeStyles(theme => ({
    responsiveImg: {
        maxWidth: '100%',
        height: 'auto'
    },
    divider: {
        marginTop: '3rem',
        marginBottom: '3rem',
        backgroundColor: theme.palette.primary[100]
    },
    card: {
        backgroundColor: 'transparent',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: theme.palette.grey[300]
    },
    scenarioImg: {
        height: 140,
    },
    systemScenarioImg: {
        height: 240,
    },
    expension: {
        backgroundColor: 'transparent',
        '&.Mui-expanded': {
            margin: '0',
            minHeight: '48px'
        },
    },
}));

const Architecture = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isSmallDevice = useMediaQuery(theme.breakpoints.up('md'));

    return <>
        <PageTitle main="System Architecture" />
        <Container fixed>
            <Box my={3}>
                <Typography gutterBottom variant="h4">
                    ABSTRACT ARCHITECTURE
                </Typography>
            </Box>
            <Box my={3}>
                <img
                    className={classes.responsiveImg}
                    alt="OpenLAP Abstract Architecture"
                    src={process.env.PUBLIC_URL + "/images/abstract-architecture.png"}
                />
                <Typography gutterBottom variant="subtitle2">
                    <Box mb={2} textAlign="center">
                        OpenLAP Abstract Architecture <Link to="/publications?select=bdla17">(Chatti et al., 2017)</Link>
                    </Box>
                </Typography>
                <Typography variant="body1">OpenLAP follows a user-centric approach to engage end users in flexible definition and dynamic generation of indicators. To meet the requirements of diverse users, OpenLAP provides a modular and extensible architecture that allows the easy integration of new analytics modules, analytics methods, and visualization techniques.</Typography>

                <Typography variant="body1">The <strong>Open Learning Analytics Platform (OpenLAP)</strong> provides a detailed technical OLA architecture with a concrete implementation of all its components, seamlessly integrated in a platform. It encompasses different stakeholders associated through a common interest in LA but with diverse needs and objectives, a wide range of data coming from various learning environments and contexts, as well as multiple infrastructures and methods that enable to draw value from data in order to gain insight into learning processes.</Typography>
            </Box>
            <Divider className={classes.divider} />
            <Box my={3}>
                <Typography gutterBottom variant="h4">
                    CORE COMPONENTS
                </Typography>
            </Box>
            <Box my={3}>
                <Grid container direction={isSmallDevice ? "row-reverse" : "row"} spacing={2}>
                    <Grid item md={6}>
                        <img
                            className={classes.responsiveImg}
                            src={process.env.PUBLIC_URL + "/images/technical-architecture.png"}
                            alt="OpenLAP Implementation Architecture"
                        />
                        <Typography gutterBottom variant="subtitle2">
                            <Box textAlign="center">
                                OpenLAP Abstract Architecture <Link to="/publications?select=csedu17">(Muslim et al., 2017)</Link>
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid item md={6}>
                        <Typography variant="body1">The abstract architecture of OpenLAP shows the interaction between the three core components in OpenLAP, namely <i>Data Collection and Management</i>, <i>Indicator Engine</i>, and <i>Analytics Framework</i>.</Typography>

                        <Typography variant="body1">The <strong>Data Coordinator</strong> component is responsible for collecting learning activities data from different sources adhering to the privacy policies of OpenLAP and generating the learner and context models from it.</Typography>

                        <Typography variant="body1">The aim of the <strong>Indicator Engine</strong> is to achieve personalized and goal-oriented LA by following a Goal - Question - Indicator (GQI) approach that allows users to easily define new indicators through an intuitive and interactive UI. Additionally, it provides an administration panel to manage the analytics modules, analytics methods, and visualization techniques in OpenLAP.</Typography>

                        <Typography variant="body1">The <strong>Analytics Framework</strong> is responsible for the management, generation and execution of indicators. It is the combination of the <i>OpenLAP-DataSet</i>, the <i>Analytics Modules</i>, the <i>Analytics Methods</i>, the <i>Visualizer</i>, and the <i>Analytics Engine</i> core components of OpenLAP.</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Divider className={classes.divider} />
            <Box my={3}>
                <Typography gutterBottom variant="h4">
                    USER SCENARIOS
                </Typography>
            </Box>
            <Grid container spacing={2}>
                <Grid item md={4} >
                    <Card elevation={0} className={classes.card}>
                        <CardMedia
                            className={classes.scenarioImg}
                            image={process.env.PUBLIC_URL + '/images/student.jpg'}
                        />
                        <ExpansionPanel elevation={0} className={classes.expension}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="student-scenario-header"
                            >
                                <Typography variant="h5">Student Scenario</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Box>
                                    <Typography>Amir is a computer science student at ABC University. He is interested in web technologies. He uses the open learning analytics platform to collect data from his learning activities related to this subject on the university LMS, the edX MOOC platform, Khan Academy, his blog, Facebook, YouTube, Slideshare, and various discussion forums.</Typography>

                                    <Typography>What Amir likes most about the open learning analytics platform is that it provides him the possibility to select which learning activities from which application can be collected in his profile. For Amir privacy is one of the big concerns. By default all the logged activity data are only available to him. He has, however, the option to specify which data will be publicly available to whom and for how long.</Typography>

                                    <Typography>Amir is interested in monitoring his performance across the different platforms. He uses the indicator editor to generate a new indicator which aggregates marks from the university LMS, the peer-review feedback from the edX MOOC platform, and open badges from Kahn Academy. He specifies to visualize his marks compared to his peers as a line chart, his peer-review feedback in a textual format, and his badges as a list view. The platform then generates the visualization code that Amir can embed in the assessment module of the university LMS. Further, Amir is interested in getting recommendations related to web technologies in form of lecture slides, videos, online articles, blog posts, and discussion forums. He generates a new indicator which recommends him learning resources from different sources. He then embeds the generated indicator in the learning materials module of the university LMS <Link to="/publications?select=bdla17">(Chatti et al., 2017)</Link>.</Typography>
                                </Box>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Card>
                </Grid>
                <Grid item md={4} >
                    <Card elevation={0} className={classes.card}>
                        <CardMedia
                            className={classes.scenarioImg}
                            image={process.env.PUBLIC_URL + '/images/teacher.jpg'}
                        />
                        <ExpansionPanel elevation={0} className={classes.expension}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="teacher-scenario-header"
                            >
                                <Typography variant="h5">Teacher Scenario</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Box>
                                    <Typography>Rima is a lecturer at ABC University where she uses the university LMS to administer her courses. She uses personalized dashboard of the open learning analytics platform which gives her an overview of her courses using various indicators to augment and improve her teaching process. On the dashboard she has various predefined indicators such as paticipation rate of students in lecture, students’ involvement rate in discussion forum, most viewed/downloaded documents, and the progress of her students in assignments.</Typography>

                                    <Typography>Recently, Rima came up with the requirement to see which learning materials are more discussed in discussion forums. She looked in the list of available indicators but did not find any indicator which can fulfill this requirement. She opened the indicator editor which helps her in generating the new indicator and defining the appropriate visualization for this indicator. The newly generated indicator is also added to the list of available indicators for future use by other users <Link to="/publications?select=bdla17">(Chatti et al., 2017)</Link>.</Typography>
                                </Box>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Card>
                </Grid>
                <Grid item md={4} >
                    <Card elevation={0} className={classes.card}>
                        <CardMedia
                            className={classes.scenarioImg}
                            image={process.env.PUBLIC_URL + '/images/developer.jpeg'}
                        />
                        <ExpansionPanel elevation={0} className={classes.expension}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="developer-scenario-header"
                            >
                                <Typography variant="h5">Developer Scenario</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Box>
                                    <Typography>Hassan is a researcher at ABC University. He developed a mobile application for collaborative annotation of lecture videos. He is interested in using the open learning analytics platform to analyze the social interactions of the application’s users. Based on the data model specification and guidelines provided by the open learning analytics platform, he develops a new collector to collect activity data from his mobile application and send it to the platform. Further, he uses the indicator editor to define a new indicator which should apply the Gephi social network analysis method on the collected data. Unfortunately, this method is not available in the platform yet. Therefore, he uses the platform API to register Gephi as a new analysis method. Hassan goes back to the indicator editor and selects the newly registered analysis method to be applied in his indicator <Link to="/publications?select=bdla17">(Chatti et al., 2017)</Link>.</Typography>
                                </Box>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Card>
                </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Box my={3}>
                <Typography gutterBottom variant="h4">
                    System SCENARIOS
                </Typography>
            </Box>
            <Grid container spacing={2}>
                <Grid item md={6} >
                    <Card elevation={0} className={classes.card}>
                        <Box>
                            <img
                                className={classes.responsiveImg}
                                alt="OpenLAP Abstract Architecture"
                                src={process.env.PUBLIC_URL + '/images/indicator-generation.png'} />
                        </Box>
                        <ExpansionPanel elevation={0} className={classes.expension}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="generation-scenario-header"
                            >
                                <Typography variant="h5">Indicator Generation</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Box>
                                    <Typography>The indicator generation process is realized by the <i>Indicator Engine</i> component of OpenLAP to let users dynamically define their new indicators. During this process, the user interacts with the "Indicator Editor" UI of the <i>Indicator Engine</i> to specify the LA goal such as monitoring, prediction, assessment, and reflection. Afterwards, the user formulates the LA question and associates multiple indicators to answer this question. To generate a new indicator, the user performs the following steps:</Typography>
                                    <ul className="bulletpoints">
                                        <li>Explore the learning activities data stored in the Learning Context Data Model (LCDM) format.</li>
                                        <li>Select an appropriate dataset for the indicator.</li>
                                        <li>Apply different filters.</li>
                                        <li>Choose the analytics method to be applied.</li>
                                        <li>Map the columns of the dataset to the inputs of the analytics method.</li>
                                        <li>Choose the visualization technique to be used.</li>
                                        <li>Map the outputs of the analytics method to the inputs of the visualization technique.</li>
                                        <li>Preview the visualization of the indicator.</li>
                                    </ul>
                                    <Typography>During the indicator generation process, the <i>Indicator Engine</i> remains in continuous communication with the "Analytics Engine" component of the <i>Analytics Framework</i> to get all possible dataset parameters, get the list of analytics methods which can be used, get the visualization techniques which can be applied, validate the specified mappings, and generate the indicator preview. After the indicator is finalized, the "Analytics Engine" saves it to database as a triad: indicator query ID - method ID - visualizer ID and generates an HTML and JavaScript based indicator request codes for each indicator which the user can embed in any client application (e.g. Web page, dashboard, LMS) to visualize the indicator with current data <Link to="/publications?select=csedu17">(Muslim et al., 2017)</Link>.</Typography>
                                </Box>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Card>
                </Grid>
                <Grid item md={6} >
                    <Card elevation={0} className={classes.card}>
                        <Box>
                            <img
                                className={classes.responsiveImg}
                                alt="Indicator Execution Process"
                                src={process.env.PUBLIC_URL + '/images/indicator-execution.png'} />
                        </Box>
                        <ExpansionPanel elevation={0} className={classes.expension}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="execution-scenario-header"
                            >
                                <Typography variant="h5">Indicator Execution</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Box>
                                    <Typography>The indicator execution process is handled by the <i>Analytics Framework</i> component of OpenLAP. The indicator request code embedded in the client application request the <i>Analytics Framework</i> to visualize the specific indicator. The "Analytics Engine" intercepts the request and performs the following steps:</Typography>
                                    <ul className="bulletpoints">
                                        <li>Check whether the request is valid or not.</li>
                                        <li>Communicate with the respective <i>Analytics Module</i> to get the triad.</li>
                                        <li>Get the query related to the requested indicator from the database.</li>
                                        <li>Execute the query and get the raw data.</li>
                                        <li>Transform the raw data into the <i>OpenLAP-DataSet</i>.</li>
                                        <li>Send the <i>OpenLAP-DataSet</i> and the mapping indicator query - method to the analytics method referenced in the triad for analysis.</li>
                                        <li>Receive the analyzed data as an <i>OpenLAP-DataSet</i>.</li>
                                        <li>Send the <i>OpenLAP-DataSet</i> and the mapping method - visualization to the visualization technique referenced in the triad.</li>
                                        <li>Receive the indicator visualization code and forward it to the requesting client application to visualize the indicator.</li>
                                    </ul>
                                    <Link to="/publications?select=jla18">(Muslim et al., 2018)</Link>
                                </Box>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    </>;
}

export default Architecture;