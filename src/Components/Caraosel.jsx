import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ImgArray from './imagesPath/ImageArray';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeft from '@mui/icons-material/ChevronLeft';

const Carousel = () => {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(false);

    const changeImg = (change) => {
        setFade(true);
        setTimeout(() => {
            if (change === 'forward') {
                setIndex((index + 1) % ImgArray.length);
            } else if (change === 'backward') {
                setIndex((index - 1 + ImgArray.length) % ImgArray.length);
            }
            setFade(false);
        }, 300); // 500ms matches the duration of the fade effect
    };

    return (
        <CarouselContainer>
            <ImageContainer fade={fade} style={{ backgroundImage: `url(${ImgArray[index]})` }} />
            <Indicator>
                <LeftIndicator className='mx-2' onClick={() => { changeImg('backward') }}>
                    <ChevronLeft className='icon' />
                </LeftIndicator>
                <RightIndicator className='mx-2' onClick={() => { changeImg('forward') }}>
                    <ChevronRightIcon className='icon' />
                </RightIndicator>
            </Indicator>
        </CarouselContainer>
    )
}

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

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
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ fade }) => (fade ? 0 : 1)};
`;

const Indicator = styled.div`
  width: 100%;
  position: absolute;
  bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftIndicator = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
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
`;

const RightIndicator = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
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
`;

export default Carousel;
