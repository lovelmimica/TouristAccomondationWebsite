import React, { useEffect } from 'react';
import { StyledLink } from './LinkStyle';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Link = (props) => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    return(
        <StyledLink target={props.target} href={props.href} data-aos="flip-right" marginTop={props.marginTop} marginBottom={props.marginBottom} color={props.color}>{props.children}</StyledLink>
    );
}

export default Link;