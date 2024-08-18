import React from 'react'
import styled from 'styled-components';
import './fonts.css'
import ReasonImg from './imagesPath/ReasonArray';

const Reason = () => {
  return (
    <ReasonContainer className='pb-4'>
      <div className="headingRow row ubuntuFontHeading">
        <h1>The Reasons We Do It</h1>
      </div>
      <div className="cardRow row">
        <div className="col-4 circleContainer">
          <img className='circle' src={ReasonImg[0]} alt="" />
        </div>
        <div className="col-4 circleContainer">
          <img className='circle' src={ReasonImg[1]} alt="" />
        </div>
        <div className="col-4 circleContainer">
          <img className='circle' src={ReasonImg[2]} alt="" />
        </div>
      </div>
    </ReasonContainer>
  )
}

const ReasonContainer = styled.div`
  width: 100%;
  height: 50vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1{
    font-size: 4vw;
  }

  .circle{
    width: 14vw;
    height: 14vw;
    border-radius: 50%;
    backdrop-filter: drop-shadow(2px 4px 6px black);
    box-shadow: 0px 0px 5px 0px black;
    object-fit: cover;
  }

  .cardRow{
    width: 60%;
  }
  
  .circleContainer{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 786px){
    width: 100%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 240%;

    h1{
      font-size: 8vw;
    }
  }
`;

export default Reason