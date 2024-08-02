import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';
import ImgArray from './imagesPath/ImageArray';
import CaraouselContent from './imagesPath/CaraouselDataArray';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import gsap from 'gsap';

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [value, setValue] = useState(0);
  const [play, setPlay] = useState(true);
  const intervalRef = useRef(null);
  const OverlayContent = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => {
        if (prevValue >= 100) {
          changeImg('forward');
          return 0;
        }
        return prevValue + 1;
      });
    }, 100); // Increment every 100 milliseconds

    intervalRef.current = interval;

    return () => clearInterval(interval);
  }, [value]);

  const changeImg = (change) => {
    setFade(true);
    setTimeout(() => {
      if (change === 'forward') {
        setIndex((index + 1) % ImgArray.length);
      } else if (change === 'backward') {
        setIndex((index - 1 + ImgArray.length) % ImgArray.length);
      }
      setValue(0);
      setFade(false);
    }, 200); // 200ms matches the duration of the fade effect
  };

  const pauseCarousel = () => {
    setPlay(!play);
    if (play) {
      clearInterval(intervalRef.current);
    } else {
      const interval = setInterval(() => {
        setValue((prevValue) => {
          if (prevValue >= 100) {
            changeImg('forward');
            return 0;
          }
          return prevValue + 1;
        });
      }, 100);

      intervalRef.current = interval;
    }
  };

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.from(OverlayContent.current, {
      x: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut",
    }).to(OverlayContent.current, {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power1.inOut",
    });
  }, [index]);

  return (
    <CarouselContainer>
      <ImageContainer fade={fade} style={{ backgroundImage: `url(${ImgArray[index]})` }} />
      <CaraouselContentOverlay ref={OverlayContent}>
        <h1>{CaraouselContent[index].heading}</h1>
        <p>{CaraouselContent[index].content}</p>
        <button className="btn btn-success learnButton">{CaraouselContent[index].button}</button>
      </CaraouselContentOverlay>
      <TimeLine type='range' value={value} readOnly />
      <Indicator>
        <LeftIndicator className='mx-2' onClick={() => { changeImg('backward') }}>
          <ChevronLeft className='icon' />
        </LeftIndicator>
        <PauseIndicator className='mx-2' onClick={() => { pauseCarousel() }}>
          {play ? <PauseIcon className='icon' /> : <PlayArrowIcon className='icon' />}
        </PauseIndicator>
        <RightIndicator className='mx-2' onClick={() => { changeImg('forward') }}>
          <ChevronRightIcon className='icon' />
        </RightIndicator>
      </Indicator>
      <MobileGreenBox></MobileGreenBox>
    </CarouselContainer>
  )
}

const MobileGreenBox = styled.div`
    display: none;

    @media (max-width: 991px) {
    display: block;
    width: 100vw;
    position: absolute;
    z-index: -1;
    top: 100%;
    height: 55vh;
    background-color: orange;
  }
`;

const CaraouselContentOverlay = styled.div`
  position: absolute;
  color: white;
  width: 50%;
  padding-right: 15%;
  left: 15%;

  h1 {
    font-size: 4vmax;
    margin-bottom: 1rem;
    font-family: "Ubuntu", sans-serif;
    font-weight: 700;
    font-style: normal;
  }

  p {
    padding-right: 6%;
    font-family: "Ubuntu", sans-serif;
    font-weight: 300;
    font-style: normal;
  }

  @media (max-width: 991px) {
    position: absolute;
    color: white;
    width: 80%;
    top: 107%;
    padding-right: 0%;
    left: 10%;

    h1{
      font-size: 3vmax;
      margin-bottom: 0.5rem;
    }

    p{
      padding-right: 0%;
    }

    .learnButton{
      background-color: white !important;
      color: orange;
      border: 1px solid orange;
    }
  }

`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 991px) {
    height: 35vh;
    background-size: cover;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: brightness(0.6);
  transition: opacity 0.2s ease-in-out;
  opacity: ${({ fade }) => (fade ? 0 : 1)};
`;

const Indicator = styled.div`
  width: 100%;
  position: absolute;
  bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 991px) {
    width: 100%;
    position: absolute;
    bottom: -24rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const LeftIndicator = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #28a745;
  border-radius: 50%;
  margin: 0 10px;

  .icon {
    color: white;
    font-size: 2rem;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  &:hover .icon {
    transform: scale(1.2);
  }
  
  @media (max-width: 991px){
    background-color: white;

    .icon{
      color: orange;
    }
  }
`;

const PauseIndicator = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #28a745;
  border-radius: 50%;
  margin: 0 10px;

  .icon {
    color: white;
    font-size: 2rem;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  &:hover .icon {
    transform: scale(1.2);
  }
  
  @media (max-width: 991px){
    background-color: white;

    .icon{
      color: orange;
    }
  }
`;

const RightIndicator = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #28a745;
  border-radius: 50%;
  margin: 0 10px;

  .icon {
    color: white;
    font-size: 2rem;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  &:hover .icon {
    transform: scale(1.2);
  }
  
  @media (max-width: 991px){
    background-color: white;

    .icon{
      color: orange;
    }
  }
`;

const TimeLine = styled.input`
  position: absolute;
  bottom: 70px;
  width: 70%;
  height: 3px;
  background-color: rgba(255, 255, 255, 0.2);
  transition: 0.1s all ease;

  
  @media (max-width: 991px) {
    position: absolute;
    bottom: -21rem;
    width: 70%;
    height: 3px;
    background-color: rgba(255, 255, 255, 0.2);
    transition: 0.1s all ease;
  }
`;

export default Carousel;
