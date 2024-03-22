import React from 'react';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

const Container = styled.div
    `height: 190vh;
    `

const Form = styled.form
    `background-color: #ABB0B8;
     display: flex;
     width: 575px;
     height: 575px;
     flex-direction: column;
     flex-wrap: wrap;
     justify-content: center;
     align-items: center;
     border-radius: 30px;
     border: 1px solid black;
    `

const Title = styled.h1
    `font-size: 24px;
     font-weight: 700;
     text-decoration: underline;
     display: flex;
     align-items: center;
     justify-content: center;
     margin: 0px 0px 30px 0px;
    `

const Required = styled.label
    `display: flex;
     align-items: center;
     margin: 20px 0px -27px 400px;
     `

const Label = styled.label
    `flex: 0.4;`

const Asterisk = styled.span
    `margin-right: 5px;
     color: red;
     font-size: 20px;
    `

const Input = styled.input
    `width: 300px;
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
     margin-top: 30px;
     margin-bottom: 20px;
     font-weight: 500;
     border-radius: 30px;
     &:hover
     {
        background-color: white;
        color: black;
     }
    `

const TextArea = styled.textarea
    `width: 300px;
     height: 130px;
     display: flex;
     justify-center: center;
     align-items; center;
     padding: 10px;
     resize: none;
     border: 1px solid black;
     border-radius: 10px;
    `

const Message = styled.p
    `font-weight: bold;
     color: red;
     display: flex;
     justify-content: center;
     margin-top: 20px;
     margin-left: -60px;
    `

const Result =() =>
{
    return(
        <p>Your message has been successfully sent! We will contact you as soon as possible. Thank you.</p>
    )
}

const Support = () => 
{
    const [result, showResult] = useState(false);

    const sendEmail=(e) => 
    {
        e.preventDefault();
    
        emailjs.sendForm('service_xu2mi2f', 'template_uj2l2rs', e.target, 'SIOwsGLC6aDz3hjO6')
        
        .then((result) => 
        {
            console.log(result.text);
        }, 

        (error) => 
        {
            console.log(error.text);
        }
        );

        e.target.reset();
        showResult(true);
    };

    // Hide message after 5 seconds
    setTimeout(() =>
    {
        showResult(false)
    }, 15000);
    
    return (
        <Container>
            <Form onSubmit = {sendEmail}>
                <Required><b><Asterisk>*</Asterisk>required fields</b></Required>
                <Title>SEND MESSAGE</Title>
                <Label>NAME:<Asterisk>*</Asterisk>
                    <Input type = "text" name = "name" placeholder = "Please enter your name." required />
                </Label>
                <Label>EMAIL:<Asterisk>*</Asterisk>
                    <Input type = "email" name = "email" placeholder = "Please enter your email." required />
                </Label>
                <Label>MESSAGE:<Asterisk>*</Asterisk>
                    <TextArea name = "message" placeholder = "Type your message here." required></TextArea>
                </Label>
                <Button>SEND</Button>   
            </Form>
            <Message>{result ? <Result/> : null}</Message>  
        </Container>  
    )
}

export default Support;

