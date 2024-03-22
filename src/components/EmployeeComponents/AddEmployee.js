import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import employeeService from '../../services/employeeService';
import { countries, states } from '../../data';
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

const Radio = styled.div
    `display: flex;
     align-items: center;
     justify-content: center;
     margin: -45px 110px 10px 465px;
    `    

const RadioInput = styled.label
    `display: flex;
     align-items: center;
     justify-content: center;
     margin-left: -345px;
     margin-top: 10px;
     font-size: 14px;
    `

const RadioLabel = styled.label
    `display: flex;
     align-items: center;
     justify-content: center;
     margin-right: -150px;
     margin-left: -185px;
    ` 

const RInput = styled.input
    `margin-right: 195px;
    ` 

const AddEmployee = () => 
{
    let navigate = useNavigate();

    const countryList = [...new Set(countries.map(item => item.Country))];
    countryList.sort();

    const stateList = [...new Set(states.map(item => item.name))];
    stateList.sort();

    const cityList = [...new Set(countries.map(item => item.Name))];
    cityList.sort();

    const [emp, setEmp] = useState(
    {
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        phoneNumber: '',
        password: '',
        jobTitle: '',
        address: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
        isAdmin: ''
    });

    const{firstName, lastName, age, email, phoneNumber, password, jobTitle, address, city, state, country, zipCode} = emp;

    const onInputChange = (e) => 
    {
        setEmp({ ...emp, [e.target.name] : e.target.value});
    };

    const onSubmit = (e) => 
    {
        e.preventDefault();
        employeeService.create(emp);
        navigate("/employees");
        window.location.reload(false);
    };

  return(
    <Container>
        <Frame>
            <Form onSubmit = {(e) => onSubmit(e)}>
            <Required><b><Asterisk>*</Asterisk>required fields</b></Required>
            <Title>NEW EMPLOYEE</Title>
            <Label style = {{marginTop: 80, marginLeft: 5, marginRight: 0}}>FIRST NAME:<Asterisk>*</Asterisk>
                    <Input type = {"text"} name = {"firstName"} onChange = {(e) => onInputChange(e)} value = {firstName} placeholder = {"ex. John"} required />
                </Label>
                <Label style = {{marginTop: 80, marginLeft: 0}}>LAST NAME:<Asterisk>*</Asterisk>
                    <Input type = {"text"} name = {"lastName"} onChange = {(e) => onInputChange(e)} value = {lastName} placeholder = {"ex. Doe"} required />
                </Label>
                <Label style = {{marginTop: 80, marginLeft: 0}}>AGE:<Asterisk>*</Asterisk><b>(ex. 40)</b>
                    <Input type = {"text"} pattern = {"[0-9]{2}"} name = {"age"} onChange = {(e) => onInputChange(e)} value = {age} placeholder = {"Enter Your Age."} maxLength = {2} required />
                </Label>
                <Label>EMAIL/USERNAME:<Asterisk>*</Asterisk>
                    <Input type = {"email"} name = {"email"} onChange = {(e) => onInputChange(e)} value = {email} placeholder = {"ex. example@gmail.com"} required />
                </Label>
                <Label>CONTACT NUMBER:<Asterisk></Asterisk> 
                    <Input type = {"text"} name = {"phoneNumber"} onChange = {(e) => onInputChange(e)} value = {phoneNumber} placeholder = {"ex. 123-456-7890"} minLength = {12} maxLength = {12} />
                </Label>
                <Label>SET PASSWORD:<Asterisk>*</Asterisk> <b>(minimum 8 characters long)</b>
                    <Input type = {"password"} name = {"password"} onChange = {(e) => onInputChange(e)} value = {password} placeholder = {"********"} minLength = {8} required />
                </Label>
                <Label>JOB TITLE:<Asterisk>*</Asterisk>
                    <Input type = {"text"} name = {"jobTitle"} onChange = {(e) => onInputChange(e)} value = {jobTitle} placeholder = {"ex. Software Engineer"} required />
                </Label>
                <Label>ADDRESS:<Asterisk></Asterisk>
                    <Input type = {"text"} name = {"address"} onChange = {(e) => onInputChange(e)} value = {address} placeholder = {"ex. 123 Example Dr."} />
                </Label>
                <Label>CITY:<Asterisk>*</Asterisk>
                    <Select name = {"city"} onChange = {(e) => onInputChange(e)} value = {city} required>
                        <Option value = "" disabled>-- SELECT CITY --</Option>
                        {cityList.map((e) =>
                        {
                            return( 
                            <Option value = {e} key = {e.id}>{e}</Option>);
                        })}
                    </Select>
                </Label>
                <Label>STATE/PROVINCE:<Asterisk></Asterisk> <b>(US and CANADA ONLY)</b>
                    <Select name = {"state"} onChange = {(e) => onInputChange(e)} value = {state}>
                        <Option value = "" disabled>-- SELECT STATE/PROVINCE --</Option>
                        {stateList.map((e) =>
                        {
                            return( 
                            <Option value = {e} key = {e.id}>{e}<p>{e.abbreviation}</p></Option>);
                        })}
                    </Select>
                </Label>
                <Label>COUNTRY:<Asterisk>*</Asterisk>
                    <Select name = {"country"} onChange = {(e) => onInputChange(e)} value = {country} required>
                        <Option value = "" disabled>-- SELECT COUNTRY --</Option>
                        {countryList.map((e) =>
                        {
                            return( 
                                <Option value = {e} key = {e.id}>{e}</Option>);
                        })}
                    </Select>
                </Label>
                <Label>ZIPCODE:<Asterisk></Asterisk><b>(ex. 00000)</b>
                    <Input type = {"text"} pattern = {"[0-9]{5}"} name = {"zipCode"} onChange = {(e) => onInputChange(e)} value = {zipCode} placeholder = {"Enter Your Zipcode."} maxLength = {5} />
                </Label>
                <Radio>IS THIS EMPLOYEE AN ADMINISTRATOR?:<Asterisk>*</Asterisk></Radio>
                <RadioInput>
                    <RInput type = {"radio"} name = {"isAdmin"} onChange = {(e) => onInputChange(e)} value = {"No"} required /> <RadioLabel>NO</RadioLabel>
                    <RInput style = {{marginLeft: 20}} type = {"radio"} name = {"isAdmin"} onChange = {(e) => onInputChange(e)} value = {"Yes"} required /> <RadioLabel>YES</RadioLabel>
                </RadioInput>
                <Agreement>BY CREATING THIS ACCOUNT, I CONSENT TO THE PROCESSING OF MY PERSONAL DATA IN ACCORDANCE WITH THE <b>PRIVACY POLICY</b></Agreement>
                <Button type = {"submit"}>SUBMIT</Button>
                <Link to = "/employees" style = {{color: "black", marginLeft: -200, marginBottom: -100, marginTop: 15}}><FaArrowLeft /> Back To Employees</Link>
            </Form>
        </Frame>
    </Container>
  )
}

export default AddEmployee;