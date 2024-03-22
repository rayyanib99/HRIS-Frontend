import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import atsService from '../../services/atsService';
import { FaArrowLeft } from "react-icons/fa";

const Container = styled.div
    `height: 100vh;
     width: 100vw;
     margin-top: -962px;
     margin-left: 360px;
    `

const Frame = styled.div
    `height: 100%;
     width: 80%;
     background-color: white;
     display: flex;
     justify-content: center;
     align-items: center;
    `

const Required = styled.label
    `flex: 1;
     display: flex;
     align-items: center;
     justify-content: flex-end;
     margin: 5px 0px 80px 1050px;
     position: absolute;
     font-weight: 700;
     `

const Asterisk = styled.span
    `margin-right: 5px;
     color: red;
     font-size: 20px;
    `

const Title = styled.h1
    `font-size: 24px;
     font-weight: 700;
     text-decoration: underline;
     display: flex;
     align-items: center;
     justify-content: center;
     margin: 10px 0px 30px 500px;
     position: absolute;
    `

const Form = styled.form
    `width: 100%;
     height: 90%;
     display: flex;
     flex-wrap: wrap;
     padding: 20px;
     border-radius: 30px;
     border: 1px solid black;
     background-color: #ABB0B8;
    `

const Label = styled.label
    `flex: 1;
    margin-bottom: -70px;
    margin-right: -5px;
    margin-left: 5px;
    `

const Input = styled.input
    `flex: 1;
     width: 20vw;
     margin: 5px 10px 0px 0px;
     padding: 10px;
     border-radius: 10px;
     border: 1px solid black;
    `

const Select = styled.select
    `flex: 1;
     width: 20vw;
     margin: 5px 10px 0px 0px;
     padding: 10px;
     border-radius: 10px;
     border: 1px solid black;
    `

const Option = styled.option
    ``

const Agreement = styled.span
    `font-size; 12px;
     margin-left: 5px;
     margin-top: 10px;
    `

const Button = styled.button
    `width: 20%;
     height: 7%;
     border: 1px solid black;
     padding: 0px 0px;
     background-color: black;
     border-radius: 30px;
     color: white;
     margin-top: -70px;
     margin-bottom: -100px;
     margin-left: 500px;
     justify-content: center;
     cursor: pointer;
     font-weight: 500;
     &:hover
     {
        background-color: white;
        color: black;
        text-decoration: underline;
     }
    `

const AddAts = () => 
{
    let navigate = useNavigate();

    const [ats, setAts] = useState(
    {
        fullName: '',
        dateOfBirth: '',
        position: '',
        address: '',
        phoneNumber: '',
        email: '',
        legal: '',
        desirePay: '',
        highestEducation: '',
        relExp: '',
        resume: '',
        gender: '',
        race: '',
        date: ''
    });

    const{fullName, dateOfBirth, position, address, phoneNumber, email, legal, desirePay, highestEducation, relExp, resume, gender, race, date} = ats;
    
    const onInputChange = (e) => 
    {
        setAts({ ...ats, [e.target.name] : e.target.value});
    };

    const onSubmit = (e) => 
    {
        e.preventDefault();
        atsService.create(ats);
        navigate("/ats");
        window.location.reload(false);
    };

  return (
    <Container>
        <Frame>
            <Form onSubmit = {(e) => onSubmit(e)}>
            <Required><b><Asterisk>*</Asterisk>required fields</b></Required>
            <Title>NEW APPLICATION</Title>
                <Label style = {{marginTop: 80, marginLeft: 5, marginRight: 0}}>FULL NAME:<Asterisk>*</Asterisk>
                    <Input type = {"text"} name = {"fullName"} onChange = {(e) => onInputChange(e)} value = {fullName} placeholder = {"Enter Your Full Name."} required />
                </Label>
                <Label style = {{marginTop: 80, marginLeft: 0}}>DATE OF BIRTH:<Asterisk>*</Asterisk>
                    <Input type = {"date"} name = {"dateOfBirth"} onChange = {(e) => onInputChange(e)} value = {dateOfBirth} placeholder = {"mm/dd/yyyy"} required />
                </Label>
                <Label style = {{marginTop: 80, marginLeft: 0}}>ADDRESS:<Asterisk>*</Asterisk>
                    <Input type = {"text"} name = {"address"} onChange = {(e) => onInputChange(e)} value = {address} placeholder = {"ex. 123 Example Dr. Dallas, TX, USA 12345"} required />
                </Label>
                <Label>EMAIL:<Asterisk>*</Asterisk>
                    <Input type = {"email"} name = {"email"} onChange = {(e) => onInputChange(e)} value = {email} placeholder = {"ex. example@gmail.com"} required />
                </Label>
                <Label>CONTACT NUMBER:<Asterisk></Asterisk> 
                    <Input type = {"text"} name = {"phoneNumber"} onChange = {(e) => onInputChange(e)} value = {phoneNumber} placeholder = {"ex. 123-456-7890"} minLength = {12} maxLength = {12} />
                </Label>
                <Label>DESIRED SALARY($):<Asterisk></Asterisk>
                    <Input type = {"text"} name = {"desirePay"} onChange = {(e) => onInputChange(e)} value = {desirePay} placeholder = {"ex. 80000"} />
                </Label>
                <Label>HIGHEST EDUCATION COMPLETED:<Asterisk>*</Asterisk>
                <Select name = {"highestEducation"} onChange = {(e) => onInputChange(e)} value = {highestEducation} required>
                        <Option value = "" disabled>-- SELECT --</Option>
                        <Option value = "GED">GED</Option>
                        <Option value = "HS Diploma">High School Diploma</Option>
                        <Option value = "Associates">Associates Degree</Option>
                        <Option value = "Bachelors">Bachelors Degree</Option>
                        <Option value = "Masters">Masters Degree</Option>
                        <Option value = "Doctorate">Doctorate</Option>
                    </Select>
                </Label>
                <Label>LEGAL STATUS:<Asterisk>*</Asterisk>
                <Select name = {"legal"} onChange = {(e) => onInputChange(e)} value = {legal} required>
                        <Option value = "" disabled>-- SELECT --</Option>
                        <Option value = "Student Visa">Student Visa</Option>
                        <Option value = "H-1B Visa">H-1B Visa</Option>
                        <Option value = "Green Card">Green Card</Option>
                        <Option value = "US Citizen">US Citizen</Option>
                    </Select>
                </Label>
                <Label>OPEN POSITIONS:<Asterisk>*</Asterisk>
                    <Select name = {"position"} onChange = {(e) => onInputChange(e)} value = {position} required>
                        <Option value = "" disabled>-- SELECT --</Option>
                        <Option value = "Front-End Developer">Front-End Developer</Option>
                        <Option value = "Back-End Developer">Back-End Developer</Option>
                        <Option value = "Web Developer">Web Developer</Option>
                        <Option value = "Full-Stack Developer">Full-Stack Developer</Option>
                        <Option value = "Software Developer">Software Developer</Option>
                        <Option value = "QA Analyst">QA Analyst</Option>
                    </Select>
                </Label>
                <Label>HOW MUCH RELEVANT EXPERIENCE DO YOU HAVE?:<Asterisk>*</Asterisk>
                    <Select name = {"relExp"} onChange = {(e) => onInputChange(e)} value = {relExp} required>
                        <Option value = "" disabled>-- SELECT --</Option>
                        <Option value = "Intern">Intern</Option>
                        <Option value = "0-2 Years">0-2 Years (Entry-Level)</Option>
                        <Option value = "2-5 Years">2-5 Years (Mid-Level)</Option>
                        <Option value = "5+ Years">5+ Years (Experienced)</Option>
                    </Select>
                </Label>
                <Label>GENDER:<Asterisk>*</Asterisk>
                    <Select name = {"gender"} onChange = {(e) => onInputChange(e)} value = {gender} required>
                        <Option value = "" disabled>-- SELECT --</Option>
                        <Option value = "Male">Male</Option>
                        <Option value = "Female">Female</Option>
                        <Option value = "Other">Other</Option>
                    </Select>
                </Label>
                <Label>RACE/ETHNICITY:<Asterisk>*</Asterisk>
                    <Select name = {"race"} onChange = {(e) => onInputChange(e)} value = {race} required>
                        <Option value = "" disabled>-- SELECT --</Option>
                        <Option value = "Hispanic">Hispanic</Option>
                        <Option value = "African-American">African-American</Option>
                        <Option value = "African">African</Option>
                        <Option value = "Asian">Asian</Option>
                        <Option value = "Caucasian">Caucasian</Option>
                        <Option value = "Undisclosed">Prefer Not To Answer</Option>
                    </Select>
                </Label>
                <Label>RESUME/CV:<Asterisk></Asterisk>
                    <Input style = {{backgroundColor: "white"}} type = {"file"} name = {"resume"} onChange = {(e) => onInputChange(e)} value = {resume} placeholder = {"Choose File"} />
                </Label>
                <Label>TODAY'S DATE:<Asterisk>*</Asterisk>
                    <Input type = {"date"} name = {"date"} onChange = {(e) => onInputChange(e)} value = {date} placeholder = {"mm/dd/yyyy"} required />
                </Label>
                <Agreement>BY SUBMITTING THIS APPLICATION, I CONSENT TO THE PROCESSING OF MY PERSONAL DATA IN ACCORDANCE WITH THE <b>PRIVACY POLICY</b></Agreement>
                <Button type = {"submit"}>SUBMIT</Button>
                <Link to = "/ats" style = {{color: "black", marginLeft: -200, marginBottom: -100, marginTop: 15}}><FaArrowLeft /> Back To Applications</Link>
            </Form>
        </Frame>
    </Container>
  )
}

export default AddAts;