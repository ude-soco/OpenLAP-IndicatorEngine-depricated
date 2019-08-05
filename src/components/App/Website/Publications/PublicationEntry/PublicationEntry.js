import React from 'react';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(theme => ({
    divider: {
        marginBottom: '1.5rem',
        marginTop: '1.5rem',
    },
    pdfFile: {
        fontSize: '1.5rem',
        color: '#d32f2f',
        '&:hover': {
            color: '#ef5350'
        }
    },
    arrow: {
        fontSize: '3rem',
        color: '#ff7600',
        marginLeft:'-30px',
        paddingTop: '15px',
    }
}));

const PublicationEntry = (props) => {
    const classes = useStyles();

    return <>
        <Box id={props.id} mx={3}>

            <Typography variant="h5">
                {props.isSelected && <FontAwesomeIcon className={classes.arrow} icon={faChevronRight} />}{props.pubURL ? <a href={props.pubURL} target="_blank" rel="noopener noreferrer">{props.title}</a> : props.title} {props.downloadURL ? <a className={classes.pdfFile} href={props.downloadURL} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFilePdf} /></a> : <></>}
            </Typography>

            <Typography variant="h6">
                {props.authors}
            </Typography>
            <Typography>
                <i>{props.journal}</i>, {props.meta}
            </Typography>
            {!props.hideRuler && <Divider className={classes.divider} />}
        </Box>
    </>;
}

export default PublicationEntry;