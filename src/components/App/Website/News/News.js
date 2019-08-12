import React from 'react';
import Container from '@material-ui/core/Container';

import PageTitle from '../../Common/PageTitle/PageTitle';
import NewsEntry from './NewsEntry/NewsEntry';

const News = () => {
    const data = [
        { imageURL: "/images/news/rwth.png", date: "14/12/2018", title: "Doctoral dissertation publication in RWTH Aachen Univeristy", desc: "Doctoral dissertation titled <a href='/publications?select=rwth18'>OpenLAP: A User-Centered Open Learning Analytics Platform</a> of Dr. Arham Muslim is published in RWTH Aachen Univeristy." },
        { imageURL: "/images/news/jla.jpg", date: "20/07/2018", title: "Publication in Journal of Learning Analytics", desc: "<a href='/publications?select=jla18'>A Modular and Extensible Framework for Open Learning Analytics</a> paper is published in the <i>Journal of Learning Analytics</i>  VOL 5 NO 1 (2018)." },
        { imageURL: "/images/news/csedu17.jpeg", date: "20/04/2017", title: "Presentation in CSEDU 2017", desc: "<a href='/publications?select=csedu17'>The Goal - Question - Indicator Approach for Personalized Learning Analytics</a> paper is presented at the <i>9th International Conference on Computer Supported Education (CSEDU)</i> 2017." },
        { imageURL: "/images/news/bdla.jpg", date: "28/08/2016", title: "\"Big Data and Learning Analytics in Higher Education\" Book available.", desc: "<a href='/publications?select=bdla17'>Toward an Open Learning Analytics Ecosystem</a> book chapter published in the <i>Big Data and Learning Analytics in Higher Education</i> book by Springer is now available." },
        { imageURL: "/images/news/lak16.jpg", date: "28/04/2016", title: "Presentation in LAK16", desc: "<a href='publications?select=lak16'>A Rule-Based Indicator Definition Tool for Personalized Learning Analytics</a> paper is presented at the <i>Sixth International Conference on Learning Analytics & Knowledge (LAK)</i> 2016." },
    ];

    const news = [];

    for (const [index, value] of data.entries()) {
        let hideRuler = index >= data.length - 1 ? { hideRuler: true } : {};
        news.push(<NewsEntry key={index} imageURL={value.imageURL} date={value.date} title={value.title} {...hideRuler}>{value.desc}</NewsEntry>)
    }

    return <>
        <PageTitle main="News & Updates"/>
        <Container fixed>
            {news}
        </Container>
    </>;
}

export default News;