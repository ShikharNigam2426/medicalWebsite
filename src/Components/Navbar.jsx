import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navCollapseRef = useRef(null);
  const collapseButtonRef = useRef(null);
  const listItemRefs = useRef([]);
  listItemRefs.current = [];
  const navContent = useRef(null);
  const navRoutes = useRef(null);
  const navButtonAnimate = useRef(null);

  const addToRefs = (el) => {
    if (el && !listItemRefs.current.includes(el)) {
      listItemRefs.current.push(el);
    }
  };

  useEffect(() => {
    
    if (toggle) {
      const tl = gsap.timeline();
      tl.to(navCollapseRef.current, { y: 0, duration: 0.5, ease: "expo.inOut" });
      tl.from(listItemRefs.current, {
        opacity: 0,
        y: -40,
        duration: 0.5,
        ease: "power1.inOut",
        stagger: 0.2,
      });
      tl.from(collapseButtonRef.current, {
        opacity: 0,
        y: -40,
        duration: 0.5,
        ease: "power1.inOut"
      }, "-=0.5");
    } else {
      const tll = gsap.timeline();
      tll.to(navCollapseRef.current, { y: '-100%', duration: 0.5, ease: "expo.inOut" });
    }
  }, [toggle]);
  

  return (
    <CollapseContainer>
      <NavContainer className='container'>
        <NavLogo ref={navContent}>
          <img src="https://www.zoetis.com/_assets/img/zoetis_logo.svg" alt="Logo" />
        </NavLogo>
        <NavList ref={navRoutes}>
          <ul className='d-flex justify-content-between p-0 mx-5 my-0' style={{ listStyle: 'none' }}>
            <li>Our Company</li>
            <li>Products & Science</li>
            <li>Customer Care</li>
            <li>News & Insights</li>
            <li><img style={{ width: '30px' }} src="./assets/gifs/globe.gif" alt="Globe" /></li>
            <li><img style={{ width: '30px' }} src="./assets/gifs/search.gif" alt="Search" /></li>
          </ul>
        </NavList>
        <NavButton ref={navButtonAnimate}>Investor Relations</NavButton>
        <NavToggle onClick={() => setToggle(!toggle)}>
          {toggle ? <CloseIcon /> : <MenuIcon />}
        </NavToggle>
      </NavContainer>
      <NavCollapse ref={navCollapseRef} className='bg-success'>
        <CollapseList className='NavLists'>
          <ul className='d-flex flex-column justify-content-between p-0 mx-5 my-0' style={{ listStyle: 'none' }}>
            <li ref={addToRefs}>Our Company</li>
            <li ref={addToRefs}>Products & Science</li>
            <li ref={addToRefs}>Customer Care</li>
            <li ref={addToRefs}>News & Insights</li>
          </ul>
        </CollapseList>
        <CollapseButton ref={collapseButtonRef}>Investor Relations</CollapseButton>
      </NavCollapse>
    </CollapseContainer>
  );
};

// Styled Component Code

const CollapseContainer = styled.div`
  position: relative;
  font-family: "Ubuntu Condensed", sans-serif;
  font-weight: bold;
  font-style: normal;

  li {
    cursor: pointer;
  }
`;

const NavContainer = styled.div`
  z-index: 100;
  width: 100vw;
  height: 10vh;
  background-color: transparent;
  border-bottom: 1px solid #00000026;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (max-width: 991px) {
    justify-content: space-between;
  }
`;

const NavLogo = styled.div`
  width: auto;
`;

const NavList = styled.div`
  width: 60%;
  border-right: 1px solid black;
  @media (max-width: 991px) {
    display: none;
  }
`;

const NavButton = styled.button`
  height: 40px;
  border: 3px solid #28a745;
  border-radius: 10px;
  color: #28a745;
  background-color: white;
  transition: all ease 0.3s;

  @media (max-width: 991px) {
    display: none;
  }

  &:hover {
    background-color: #28a745;
    color: white;
  }
`;

const CollapseButton = styled.button`
  @media (max-width: 991px) {
    opacity: 0;
    height: fit-content;
    border: 3px solid #28a745;
    border-radius: 10px;
    color: #28a745;
    background-color: white;
    transition: all ease 0.3s;
  }
`;

const CollapseList = styled.div``;

const NavCollapse = styled.div`
  z-index: 99;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  /* background-color: orange; */
  transform: translateY(-100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;

  @media (min-width: 992px) {
    display: none;
  }
`;

const NavToggle = styled.div`
  cursor: pointer;
  display: none;

  @media (max-width: 991px) {
    display: flex;
  }
`;

export default Navbar;
