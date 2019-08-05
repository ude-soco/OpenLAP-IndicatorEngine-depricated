import React from 'react';
import Container from '@material-ui/core/Container';
import PageTitle from '../../Common/PageTitle/PageTitle';
import PublicationEntry from './PublicationEntry/PublicationEntry';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    divider: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        backgroundColor: theme.palette.primary.dark,
    },
}));

const Publications = (props) => {
    const query = new URLSearchParams(props.location.search);
    const selectedPub = query.get('select') || "NA";
    const classes = useStyles();
    const data = [{
        year: 2018, publications: [
            { key: "jla18", title: "A modular and extensible framework for open learning analytics", authors: "Arham Muslim, Mohamed Amine Chatti, Muhammad Bassim Bashir, Oscar Eduardo Barrios Varela, Ulrik Schroeder", journal: "Journal of Learning Analytics", meta: "5(1), 92-100, 2018.", pubURL: "https://learning-analytics.info/journals/index.php/JLA/article/view/5607", downloadURL: "/uploads/publications/JLA18_Framework.pdf" }
        ]
    }, {
        year: 2017, publications: [
            { key: "bdla17", title: "Toward an Open Learning Analytics Ecosystem", authors: "Mohamed Amine Chatti, Arham Muslim, Ulrik Schroeder", journal: "Big Data and Learning Analytics in Higher Education: Current Theory and Practice", meta: "pp. 195-219, Springer, 2017.", pubURL: "https://link.springer.com/chapter/10.1007/978-3-319-06520-5_12", downloadURL: "/uploads/publications/BDLA17_OpenLAP.pdf" },
            { key: "csedu17", title: "The Goal - Question - Indicator Approach for Personalized Learning Analytics", authors: "Arham Muslim, Mohamed Amine Chatti, Memoona Mughal, Ulrik Schroeder", journal: "Proceedings of the 9th International Conference on Computer Supported Education (CSEDU)", meta: "Volume 1, pp. 371-378, 2017.", pubURL: "http://www.scitepress.org/DigitalLibrary/PublicationsDetail.aspx?ID=KIwxSzSWLVQ=&t=1", downloadURL: "/uploads/publications/CSEDU17_IndicatorEngine.pdf" }
        ]
    }, {
        year: 2016, publications: [
            { key: "lak16", title: "A Rule-Based Indicator Definition Tool for Personalized Learning Analytics", authors: "Arham Muslim, Mohamed Amine Chatti, Tanmaya Mahapatra, Ulrik Schroeder", journal: "Proceedings of the Sixth International Conference on Learning Analytics & Knowledge (LAK)", meta: "pp. 264-273, ACM, 2016.", pubURL: "https://dl.acm.org/citation.cfm?id=2883921", downloadURL: "/uploads/publications/LAK16_RIDT.pdf" }
        ]
    }, {
        year: 2014, publications: [
            { key: "eleed14", title: "Learning Analytics: Challenges and Future Research Directions", authors: "Mohamed Amine Chatti, Vlatko Lukarov, Hendrik Thüs, Arham Muslim, Ahmed Mohamed Fahmy Yousef, Usman Wahid, Christoph Greven, Arnab Chakrabarti, Ulrik Schroeder", journal: "e-learning & education (eleed) Journal", meta: "2014.", pubURL: "https://eleed.campussource.de/archive/10/4035", downloadURL: "" }
        ]
    }, {
        year: 2012, publications: [
            { key: "ijtel12", title: "A Reference Model for Learning Analytics", authors: "Mohamed Amine Chatti, Anna Lea Dyckhoff, Ulrik Schroeder, Hendrik Thüs", journal: "International Journal of Technology Enhanced Learning (IJTEL)", meta: "4(5/6), 318-331, 2012.", pubURL: "http://www.inderscience.com/offer.php?id=51815", downloadURL: "/uploads/publications/IJTEL12_LA_Reference_Model.pdf" }
        ]
    }
    ];

    const publications = [];

    for (const [indexYear, valueYear] of data.entries()) {
        let showYearRuler = indexYear < data.length - 1;

        publications.push(
            <Box key={"year-" + valueYear.year} my={3}>
                <Typography gutterBottom variant="h4">
                    {valueYear.year}
                </Typography>
            </Box>);

        for (const [indexPub, valuePub] of valueYear.publications.entries()) {
            let hidePubRuler = indexPub >= valueYear.publications.length - 1 ? { hideRuler: true } : {};
            publications.push(<PublicationEntry isSelected={selectedPub !== "NA" && selectedPub === valuePub.key ? true : false} key={valuePub.key} id={valuePub.key} title={valuePub.title} authors={valuePub.authors} journal={valuePub.journal} meta={valuePub.meta} pubURL={valuePub.pubURL} downloadURL={valuePub.downloadURL} {...hidePubRuler} />)
        }

        if (showYearRuler)
            publications.push(<Divider key={'divider-' + valueYear.year} className={classes.divider} />);
    }

    return <>
        <PageTitle main="Publications" />
        <Container fixed>
            {publications}
        </Container>
    </>;
}

export default Publications;