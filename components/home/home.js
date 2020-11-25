import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { ImageProfile } from '../shared';
import styles from './home.css';
import { DATA } from '../../core/constants/data';
import LinearProgress from '@material-ui/core/LinearProgress';
import * as moment from 'moment';



const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 8,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey,
    },
    bar: {
        borderRadius: 4,
        backgroundColor: '#1da38f',
    },
}))(LinearProgress);



export default function home() {


    const [data, setData] = useState([]);
    const [education, setEducation] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        setData(DATA['workExperience']);
        setEducation(DATA['education']);
        setSkills(DATA['skils']);
        moment.lang("ES")
    }, [])

    const getDateTitle = (time) => {

        let initial = moment(time['initial']).format('MMMM YYYY');
        let fin = time['isActual'] === true ? 'Actualidad' : moment(time['fin']).format('MMMM YYYY')
        return `${initial} - ${fin}`.toUpperCase()
    }


    return (
        <div className={styles.containerapp} >
            <Grid container spacing={2}>
                <Grid item xs={12} md={3} sm={12} className={styles.container_left}>
                    <ImageProfile></ImageProfile>
                    <div className={styles.container_label}>
                        <h2 className={styles.name_label}>Carlos Josiel Hernández Sánchez</h2>
                    </div>
                    <div className={styles.container_label}>
                        <p className={styles.name_label}>FrontEnd Developer</p>
                    </div>
                    <div className={styles.container_label}>
                        <p className={styles.description_label}>
                            Egresado del Instituto Tecnologico Superior de San Pedro, cuando con experiencia programando aplicaciones web con diferentes librerias y frameworks de JavaScript, tambien tengo experiencia en  HTML5,CSS3, SASS, Bootstrap y Material IU.
                        </p>
                    </div>
                    <div className={styles.container_label}>
                        <strong className={styles.country_label}>Monterrey, NL.</strong>
                    </div>
                    <div className={styles.container_social_media}>
                        <a className={styles.solcial_icon} href={'https://github.com/JosielHernandezDev/'} target="_blank">
                            <img src={'img/socialmedia/github.png'} />
                        </a>
                        <a className={styles.solcial_icon} href={'https://www.linkedin.com/in/carlos-josiel-hernandez-sanchez-923b30163/'} target="_blank">
                            <img src={'img/socialmedia/linkedIn.png'} />
                        </a>
                        <a className={styles.solcial_icon} href={"mailto:josiel.hernandez.dev@gmail.com"} target="_blank" >
                            <img src={'img/socialmedia/gmail.png'} />
                        </a>
                    </div>
                </Grid>
                <Grid item xs={12} md={9} sm={12} className={styles.container_right}>
                    {

                        data['isVisible'] &&
                        <div id={'workS'} className={styles.ej}>
                            <h2 className={styles.name_label}>EXPERIENCIA DE TRABAJO</h2>
                            {
                                data['data'].map((value, i) => {
                                    return (
                                        <div key={i}>
                                            <h3 className={styles.title_black}>{`${value['title']} - ${value['workPosition']}, ${getDateTitle(value['time'])}`}</h3>
                                            <p className={styles.description_label}>{value['description']}</p>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    }
                    {

                        education['isVisible'] &&
                        <div id={'education'} className={styles.ej}>
                            <h2 className={styles.name_label}>EDUCACION</h2>
                            {
                                education['data'].map((value, i) => {
                                    return (
                                        <div key={i}>
                                            <h3 className={styles.title_black}>{`${value['title']}, ${getDateTitle(value['time'])}`}</h3>
                                            <p className={styles.description_label}>{value['description']}</p>
                                        </div>
                                    );
                                })
                            }
                        </div>

                    }
                    {


                        skills['isVisible'] &&
                        <div id={'skills'} className={styles.ej}>
                            <h2 className={styles.name_label}>Skills</h2>
                            <Grid container spacing={2}>
                                {
                                    skills['data'].map((value, i) => {
                                        return (
                                            <Grid item xs={4} sm={4} key={i}>
                                                <h3 className={styles.title_black}>{`${value['name']}`}</h3>
                                                <div>
                                                    <BorderLinearProgress variant="determinate" value={value['percentage']} />
                                                </div>
                                            </Grid>
                                        );
                                    })
                                }
                            </Grid>
                        </div>
                    }

                </Grid>
            </Grid>
        </div>
    )

}

