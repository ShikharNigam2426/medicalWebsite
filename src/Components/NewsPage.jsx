import React from 'react'
import styled from 'styled-components';
import './fonts.css'

const NewsPage = () => {
  return (
    <NewContainer className='container-fluid'>
      <NewRow className="row">
        <LeftBox className="col-6 newsCard">
          <h1 className='ubuntuFontHeading ml-3'>News & Insights</h1>
          <button className="btn bg-white ml-3">See More</button>
        </LeftBox>
        <RightBox className="col-6 newsCard">
          <div className="row rightUp">up</div>
          <div className="row rightDown d-flex justify-content-center align-items-center"> <h2>HERE COME THE TOP NEWS</h2></div>
        </RightBox>
      </NewRow>
    </NewContainer>
  )
}

const NewContainer = styled.div`
  width: 70%;
  background-color: white;
  padding: 20px;

  @media (max-width: 786px) {
    width: 85%;
    padding: 20px;
    position: absolute;
    top: 273%;
    left: 8vw;
  }
`;

const NewRow = styled.div`
  display: flex;
  height: 45vh;
  gap: 10px;
`;

const LeftBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #28a745;;
  flex: 1;
  gap: 10px;
  border-radius: 10px;
  backdrop-filter: drop-shadow(2px 4px 6px black);
    box-shadow: 0px 0px 5px 0px black;

  h1{
    color: white;
  }

  button{
    font-size: 1.2vw;
    font-weight: 700;
    width: 150px;
    height: 50px;
  }
`;

const RightBox = styled.div`
  flex: 1;
  border-radius: 10px;
  overflow: hidden;

  .rightUp{
    height: 60%;
    background: url('https://imgs.search.brave.com/jsN1WMcr0Iy1AVHMQFlpj_WK3Txqr05tdkChzzU125Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjg5/NDIyNTM2L3Bob3Rv/L2JsYWNrLXdoaXRl/LWNvdy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9WUZFTl8y/LW5rb2tST2xEWERp/cmZQZzF1ZkpJUk50/cEdQY1FTNW0tVXl0/UT0');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .rightDown{
    height: 40%;
    background-color: #f1f1f1;
  }

  @media(max-width: 768px){
    background-size: cover;
  }
`;

export default NewsPage