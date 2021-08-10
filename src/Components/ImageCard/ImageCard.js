import React from 'react';
import { useState, useEffect } from 'react';
import { StyledImageCard, StyledImgWrapper } from './ImageCardStyle';
import { DevicesMinSizes } from '../../Sizes';

//Assets
import featuredImageMobile from '../../Assets/Images/featured-image-mobile.png';
import featuredImageDesktop from '../../Assets/Images/featured-image-desktop.png';
import interierImg from '../../Assets/Images/interier.jpg';

//Components
import Heading from '../Heading/Heading';

const ImageCard = (props) => {
    let src = props.className == "image__feature" && window.innerWidth > DevicesMinSizes.tabletInt ? featuredImageDesktop : featuredImageMobile;
    console.log(props.className);
    const [featuredImageSrc, setFeaturedImageSrc] = useState(src);

    useEffect(() => {
        function handleResize(){
            props.className == "image__feature" && window.innerWidth > DevicesMinSizes.tabletInt ? setFeaturedImageSrc(featuredImageDesktop) : setFeaturedImageSrc(featuredImageMobile);
        }
        window.addEventListener("resize", handleResize);
    });    

    return(
        <>
         {props.text ? 
         <StyledImgWrapper className="imageWrapper"> 
            <Heading>{props.text}</Heading> 
            <StyledImageCard className={props.className} src={props.src} />
         </StyledImgWrapper> :
         <StyledImageCard className={props.className} src={props.src} />
         }   
        </>
    );
}

export default ImageCard;