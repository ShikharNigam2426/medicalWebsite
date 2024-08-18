import React from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import './fonts.css'

const WelcomePage = () => {

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <WelcomeContainer className='row'>
      <WelcomeImage className='col-lg-6 col-md-6 col-sm-12' data-aos="fade-right"><img src="./assets/images/welcome.jpg" alt="" /></WelcomeImage>
      <WelcomeContent className='col-lg-6 col-md-6 col-sm-12' data-aos="fade-left">
        <h1 className='ubuntuFontHeading colorSuccess'>Welcome to Zeotis</h1>
        <div class="split-card__content ubuntuFontPara">
          <p>As the world’s leading animal health company, Zoetis is driven by a singular purpose: to nurture our world and humankind by advancing care for animals.</p>
          <p>After 70+ years of innovating ways to predict, prevent, detect and treat animal illness, Zoetis continues to stand by those raising and caring for animals worldwide — from livestock farmers to veterinarians and pet owners.</p>
          <p>The company’s leading portfolio and pipeline of medicines, vaccines, diagnostics and technologies make a difference in over 100 countries.</p>
          <p>In everything we do, we are guided by science and inspired by our shared love of animals. We truly believe that through this fusion of passion and research, we can accomplish anything.</p>
        </div>
        <button className='btn btn-success'>Learn More</button>
      </WelcomeContent>
    </WelcomeContainer>
  )
}

const WelcomeImage = styled.div`
    width: 100%;
    height: 77%;
    display: flex;
    align-items: center;

    img{
      border-radius: 25px;
      border: 2px solid whitesmoke;
      width: 100%;
    height: 100%;
    object-fit: cover;
    }

    @media (max-width: 768px){
      height: fit-content;

      img{
        border-radius: 10px;
      }
    }
`;

const WelcomeContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1{
      font-size: 3vmax;
      margin-bottom: 0.5rem;
    }
    p{
      font-size: 1.2vmax;
    }

    button{
      width: fit-content;
    }
    
    @media (max-width: 768px){
      margin-top: 1rem;
      h1{
      font-size: 4vmax;
      margin-bottom: 0.5rem;
    }
      p{
      font-size: 15px;
        padding-right: 0%;
    }
    }
`;

const WelcomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 0rem 10rem;
    margin: 0px;
    align-items: center;
    /* position: absolute; */
    
    @media (max-width: 768px) {
      top: 110%;
      width: 100vw;
      height: 100vh;
      padding: 0rem 2rem;
      align-items: center;
      position: absolute;
      margin: 0px;
    }
`;

export default WelcomePage