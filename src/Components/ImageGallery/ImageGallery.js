import React from 'react';
import { StyledImageGallery, StyledImage } from './ImageGalleryStyle';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

//Assets
import gallery1Img from '../../Assets/Images/gallery-1.jpg';
import gallery2Img from '../../Assets/Images/gallery-2.jpg';
import gallery3Img from '../../Assets/Images/gallery-3.jpg';
import gallery4Img from '../../Assets/Images/gallery-4.jpg';
import gallery5Img from '../../Assets/Images/gallery-5.jpg';
import gallery6Img from '../../Assets/Images/gallery-6.jpg';

const ImageGallery = () => {
    
    const handleDragStart = (e) => e.preventDefault();

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    }

    const items = [
        <img src={gallery1Img} role="presentation" />,
        <img src={gallery2Img} role="presentation" />,
        <img src={gallery3Img} role="presentation" />,
        <img src={gallery4Img} role="presentation" />,
        <img src={gallery5Img} role="presentation" />,
        <img src={gallery6Img} role="presentation" />
    ];

    return(
        <StyledImageGallery>
            <AliceCarousel 
                responsive={responsive} 
                infinite 
                items={items} 
                controlsStrategy="alternate"
                disableButtonsControls
                mouseTracking
                
                />
        </StyledImageGallery>
    );
}

export default ImageGallery;