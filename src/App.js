import React from 'react';
import './App.css';

//Components 
import Main from './Components/Main/Main';
import Section from './Components/Section/Section';
import LanguageSelect from './Components/LanguageSelect/LanguageSelect';
import Subheading from './Components/Subheading/Subheading';
import ImageGroup from './Components/ImageGroup/ImageGroup';
import ImageCard from './Components/ImageCard/ImageCard';
import InfoCard from './Components/InfoCard/InfoCard';
import Paragraph from './Components/Paragraph/Paragraph';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Heading from './Components/Heading/Heading';
import Link from './Components/Link/Link';
import Label from './Components/Label/Label';
import RoomController from './Components/RoomController/RoomController';
import IconCardWrapper from './Components/IconCardWrapper/IconCardWrapper';
import IconCard from './Components/IconCard/IconCard';
import DashedWrapper from './Components/DashedWrapper/DashedWrapper';
import BookingScore from './Components/BookingScore/BookingScore';
import ContactForm from './Components/ContactForm/ContactForm';
import BookingForm from './Components/BookingForm/BookingForm';
import CardsWrapper from './Components/CardsWrapper/CardsWrapper';
import Line from './Components/Line/Line';

//Assets
import mapMask from '../src/Assets/Images/map-mask.png';
import bbqIcon from '../src/Assets/Images/bbq.png';
import beachIcon from '../src/Assets/Images/beach.png';
import gardenIcon from '../src/Assets/Images/garden.png';
import petsIcon from '../src/Assets/Images/pets.png';
import quoteIcon from '../src/Assets/Images/qoute.png';
import interierImg from '../src/Assets/Images/interier.jpg';
import enjoyImg from '../src/Assets/Images/enjoy.png';
import beachImg from '../src/Assets/Images/beach.jpeg';
import room1Img from '../src/Assets/Images/room-1.jpg';
import footerBackgorund from '../src/Assets/Images/footer-background.jpg';

function App() {
  return (
    <Main>
      {/*Header section*/}
      <Section backgroundColor="#eaf4fa">
        <LanguageSelect></LanguageSelect>
        <Subheading>Stop searching!<br/>Your dream vacation is here</Subheading>
        <ImageGroup />
      </Section>
      {/*Booking form*/}
      <BookingForm className="booking-form__top" />
      {/*Intro section*/}
      <Section className="section__feature">
        <CardsWrapper>
          <ImageCard className="image__feature" src={interierImg} />
          <InfoCard>
            <Paragraph align='center'>Lokva Rogoznica</Paragraph>
            <Subheading>Apartment Tomasović</Subheading>
            <Paragraph align='center'>
              Located just 150 m from the beach, Apartments Tomasović is set in the village of Ruskamen, 3.1 mi from Omiš. It offers air-conditioned apartments with satellite TV. From its balcony guests can admire sea, Brač Island and garden views.
            </Paragraph>
            <Link href='#booking-form__bottom' marginTop='auto'>See available rooms</Link>
          </InfoCard>
        </CardsWrapper>
      </Section>
      {/*CtA section*/}
      <Section className="section__oportunity" backgroundColor="#208cce">
        <CardsWrapper>
          <ImageCard text="Give your self the oportunity to enjoy!" src={enjoyImg}/>
          <InfoCard className="section__oportunity__info-card">
            <Heading>Give your self the oportunity to enjoy!</Heading>
            <Link href='#booking-form__bottom'>BOOK NOW</Link>
          </InfoCard>
        </CardsWrapper>
      </Section>
      {/*Beach section*/}
      <Section className="section__feature">
        <CardsWrapper>
          <ImageCard className="image__feature" src={beachImg}/>
          <InfoCard>
              <Paragraph align='center'>The perfect beach</Paragraph>
              <Subheading>Beach Ruskamen</Subheading>
              <Paragraph align="center">This beach is pebble and sand. Nearby trees create a natural shade on the beach. You can find the showers on the beach as well as a Restaurant, parasols, deckchairs and its just 150 m away</Paragraph>
              <Link href='#booking-form__bottom'>See available rooms</Link>
          </InfoCard>
        </CardsWrapper>
      </Section>
      {/*Gallery section*/}
      <Section className="section__gallery" backgroundColor="#208cce">
        <Heading>Gallery</Heading>
        <ImageGallery />
      </Section>
      {/*Rooms section*/}
      <Section className="section__feature">
        <CardsWrapper className="card-wrapper__rooms">
          <Subheading className="subheading__rooms">Rooms</Subheading>
          <ImageCard className="image__rooms" src={room1Img} />
          <InfoCard className="info-card__rooms">
              <Subheading color="white">Room 1</Subheading>
              <Label align="center" color="white">4 people | Microwave | Terrace | Pets | AC</Label>
              <Paragraph color="white" align="center">Suited for 4 people, your pets are welcome. Includes 4 beds and a couch, microwave oven, private terrace with a gorgeous view of the beach and island Brač. AC is included in the price.</Paragraph>
              <Link href='#booking-form__bottom' color="white" marginTop="30px" marginBottom="20px" >BOOK A ROOM</Link>
              <RoomController />
          </InfoCard>
        </CardsWrapper>
      </Section>
      {/*Map section*/}
      <Section className='section__map' backgroundImage={mapMask} backgroundColor='white' backgroundColorTablet={'#208cce'} minHeight='300px'>
        <Heading color="white">Located in a small town Lokva Rogoznica</Heading>
        <Link href='https://www.google.com/maps/place/Beach+Ruskamen/@43.4113984,16.7646643,15.29z/data=!4m16!1m7!3m6!1s0x134a96fdc75eea71:0x80ec1430c4f04cab!2sLokva+Rogoznica!3b1!8m2!3d43.4156861!4d16.7680459!3m7!1s0x134a971382487839:0x8fadba52ad7569c6!5m2!4m1!1i2!8m2!3d43.4083709!4d16.7496299' 
          color="white" target="_blank">GET DIRECTIONS</Link>
      </Section>
      {/*Facilities section*/}
      <Section className="section__facilities" paddingTopMobile="0">
        <Subheading>Most popular facitlities of Apartment Tomasović</Subheading>
        <CardsWrapper className="card-wrapper__facilities">
          <Paragraph align="center">Apartments Tomasović can organise private boat trips to the island of Brač. Barbecue facilities are at guests’ disposal free of charge. The nearest grocery store is 150 m away and a restaurant can be reached within 200 m.</Paragraph>
          <IconCardWrapper>
              <IconCard src={petsIcon} title='Pets'/>
              <IconCard src={bbqIcon} title='BBQ'/>
              <IconCard src={gardenIcon} title='Garden'/>
              <IconCard src={beachIcon} title='Beach'/>
          </IconCardWrapper>
        </CardsWrapper>
      </Section>
      {/*Review section*/}
      <Section className="section__reviews" backgroundColor='#208cce'>
      <CardsWrapper className="card-wrapper__reviews">
        <BookingScore />
        <DashedWrapper>
            <Subheading icon={quoteIcon} color="white">Turysta, Poland</Subheading>
            <Paragraph color="white" align="center">Set great, sea view perfect. Apartment clean and tidy, sir. Ivan is so kind and available for whatever you need. All praise and recommendations!</Paragraph>
        </DashedWrapper>
        <Heading>Our guests had a wonderfull time and gave us great reviews!</Heading>
      </CardsWrapper>
      </Section>
      {/*Booking section*/}
      <Section>
        <Subheading>Have questions? We're happy to help!</Subheading>
        <ContactForm />
      </Section>
      {/*Booking form*/}
      <BookingForm id='booking-form__bottom' className="booking-form__bottom" />
      {/*Footer section*/}
      <Section backgroundImage={footerBackgorund} className="section__footer">
        <Subheading color="white">Apartmani Tomasović</Subheading>
        <Line/>
        <Label color="white">Ruskamen III/6, Lokva Rogoznica</Label>
        <Label align="center" color="white">Contact host Ivan: 091 123 4567<br/>Email: tomasovic@mail.com</Label>
        <Label className="label__privacy-notice" color="white">Powered by: Infotech Agency</Label>
      </Section>
    </Main>
  );
}

export default App;
