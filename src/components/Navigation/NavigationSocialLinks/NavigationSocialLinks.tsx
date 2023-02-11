import React, {FC} from 'react';
import {useStyles} from './NavigationSocialLinks.styles';
import {ReactComponent as TwitterIcon} from "../../../assets/icons/twitter.svg";
import {ReactComponent as IgIcon} from "../../../assets/icons/ig.svg";

interface Props {
}

const NavigationSocialLinks: FC<Props> = () => {
    const classes = useStyles();

    return (
        <ul className={classes.navSocialLinks}>
            <li><a href="#"><TwitterIcon className={classes.socialIcon} /></a></li>
            <li><a href="#"><IgIcon className={classes.socialIcon} /></a></li>
        </ul>
    );
};

export default NavigationSocialLinks;
