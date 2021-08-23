import React from 'react';
import { StyledImageGroup, StyledImage, StyledImageBox } from './ImageGroupStyle';

//Components
import Paragraph from '../Paragraph/Paragraph';

//Assets
import privateAndCleanImg from '../../Assets/Images/private-and-clean.jpg';
import viewImg from '../../Assets/Images/view.jpg';
import everythingYouNeedImg from '../../Assets/Images/everything-you-need.jpg';

const ImageGroup = () => {
    return(
        <StyledImageGroup>
            <StyledImageBox>
                <StyledImage src={privateAndCleanImg}></StyledImage>
                <Paragraph align='center'>Private and clean</Paragraph>
            </StyledImageBox>
            <StyledImageBox>
                <StyledImage src={viewImg}></StyledImage>
                <Paragraph align='center'>Georgeous view</Paragraph>
            </StyledImageBox>
            <StyledImageBox>
                <StyledImage src={everythingYouNeedImg}></StyledImage>
                <Paragraph align='center'>Everything you need</Paragraph>
            </StyledImageBox>
        </StyledImageGroup>
    );
}

export default ImageGroup;