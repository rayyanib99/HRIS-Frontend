import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div
    ``

const Wrapper = styled.div
    `background-color: black;
     color: #fff;
     height: 100.7vh;
     padding-top: 10px;
     width: 100vw;
     transition: all 0.5s;
     justify-content: center; 
    `

const Sidebar = () => 
{
    const[isOpen] = useState(false);

    return (
        <Container>
           <Wrapper style = {{width: isOpen ? "0px" : "0px"}}>
           </Wrapper>
        </Container>
    );
};

export default Sidebar;