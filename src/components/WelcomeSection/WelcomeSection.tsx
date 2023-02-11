import React, {FC} from 'react';
import {useStyles} from './WelcomeSection.styles';
import DawidImage from '../../assets/dawid.png';
import clsx from "clsx";
import {useGlobalStyles} from "../../constants";

interface Props {
}

const WelcomeSection: FC<Props> = () => {
    const classes = useStyles();
    const globalClasses = useGlobalStyles();

    return (
        <div className={classes.welcomeContainer}>
            <h1 className={clsx(globalClasses.h1, classes.welcomeText)}>
                Hi there!<br/>
                <span>I’m Dawid - A website developer based in United Kingdom.</span><br/>
                Currently working as a full stack developer at TH-EY, a fully remote company.<br/>
            </h1>
            <img src={DawidImage} alt="Dawid" className={classes.welcomeImage} />
        </div>
    );
};

export default WelcomeSection;
