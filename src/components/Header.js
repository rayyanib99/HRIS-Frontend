import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import image from './Logo.png';

const Container = styled.div
    `height: 70px;
     background-color: #ABB0B8;
     border-bottom: 1px solid black;
    `

const Image = styled.img
    `height: 5vh;
     width: 2.5vw;
     align-items: center;
     margin-right: 5px;
     object-fit: cover;
    `

const Header = () => 
{
  return (
    <Container>
      <Link to = "/" style = {{textDecoration: "none", color: "black", display: "flex", justifyContent: "center", alignItems: "center", padding: 10, fontSize: 25}}><Image src = {image} /> <b>HRIS Management</b></Link>
    </Container>
  )
}

export default Header;