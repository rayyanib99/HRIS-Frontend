import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div
    `height: 190vh;
    `

const Form = styled.form
    `background-color: #ABB0B8;
     display: flex;
     width: 500px;
     height: 500px;
     flex-direction: column;
     flex-wrap: wrap;
     justify-content: center;
     align-items: center;
     border: 1px solid black;
     border-radius: 30px;
    `

const Title = styled.h1
    `font-size: 24px;
     font-weight: 700;
     text-decoration: underline;
     display: flex;
     align-items: center;
     justify-content: center;
     margin: -10px 0px 30px 0px;
    `

const Label = styled.label
    `flex: 0.4;`

const Asterisk = styled.span
    `margin-right: 5px;
     color: red;
     font-size: 20px;
    `

const Input = styled.input
    `width: 250px;
     display: flex;
     justify-center: center;
     align-items; center;
     padding: 10px;
     border-radius: 10px;
    `

const Button = styled.button
    `width: 30%;
     border: 1px solid black;
     background-color: black;
     color: white;
     cursor: pointer;
     padding: 15px 20px;
     margin-top: -35px;
     margin-bottom: 25px;
     font-weight: 500;
     border-radius: 30px;
     &:hover
     {
        background-color: white;
        color: black;
     }
    `

const Links = styled.a
    `margin: 20px 0px -10px 0px;
     font-size: 12px;
     cursor: pointer;
     display: flex;
     align-items: center;
     justify-content: center;
     &:hover
     {
        text-decoration: underline;
     }
    `

const Login = () => 
{
  return (
    <Container>
        <Form>
            <Title>SIGN-IN</Title>
            <Label>EMAIL:<Asterisk>*</Asterisk>
                <Input placeholder = "Enter Your Email" />
            </Label>
            <Label style = {{marginTop: -40}}>PASSWORD:<Asterisk>*</Asterisk>
                <Input placeholder = "Enter Your Password" />
            </Label>
            <Button>LOG IN</Button>
            <Links><Link to = "/reset-password" style = {{textDecoration: "none", color: "black"}}>FORGOT PASSWORD?</Link></Links>
            <Links><Link to = "/register" style = {{textDecoration: "none", color: "black"}}>DON'T HAVE AN ACCOUNT?</Link></Links>
        </Form>
    </Container>
  )
}

export default Login