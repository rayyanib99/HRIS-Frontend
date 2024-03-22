import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from 'axios';
import { Link } from 'react-router-dom';
import atsService from '../../services/atsService';
import { GoPrimitiveDot } from 'react-icons/go';
import { BiLeftArrowCircle } from 'react-icons/bi';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import 
{
    FaFileSignature, 
    FaSave, 
    FaFileAlt,
    FaBars,
    FaAward,
    FaSignOutAlt,
    FaFileInvoiceDollar,
    FaTh,
    FaBriefcaseMedical,
    FaUsers,
    FaUserAlt,
    FaTable,
    FaHandHoldingMedical,
} from 'react-icons/fa';

const Container = styled.div
    ``

const Wrapper = styled.div
    `background-color: black;
     color: #fff;
     padding-top: 10px;
     transition: all 0.5s;
     justify-content: center; 
     margin-top: -962px;
    `

const NavTop = styled.div
     `background-color: black;`

const NavTitle = styled.h1
     `margin-bottom: 30px;
      padding: 10px;
     `

const TitleIcon = styled.div
     `cursor: pointer;
      font-size: 20px;
     `

const NavFrame = styled.div
    `width: 320px;
     height: 114.25px;
     margin-bottom: -31px;
     background-color: #ABB0B8;
     border-right: 1px solid black;
     border-left: 1px solid black;
    `

const NavLink = styled.p
    `display: flex;
     color: black;
     font-weight: bold;
     background-color: #ABB0B8;
     padding: 15px 15px;
     text-decoration: none;
     transition: all 0.5s;
     cursor: pointer;
     &:hover
     {
        background-color: black;
        color: white;
        border: 1px solid  white;
        text-decoration: underline;
        transition: all 0.5s;
     }
    `

const NavItem = styled.div
     `font-size: 20px;
      justify-content: center;
      align-items: center;
     `

const Frame = styled.div
    `margin-top: -820px;
     background-color: white;
     display: flex;
     align-items: center;
     margin-left: 100px;
    `

const Title = styled.h1
    `font-size: 26px;
     font-weight: 700;
     margin-top: -325px;
     margin-left: -110px;
     margin-bottom: -10px;
     text-decoration: underline;
     display: flex;
     justify-content: center;
     align-items: center;
     position: absolute;
    `

const Button = styled.button
    `justify-content: center;
     margin-right: 10px;
     padding: 5px;
     font-size: 16px;
     color: white;
     cursor: pointer;
     font-weight: 500;
     border: 1px solid ${props => props.color};
     border-radius: 10px;
     background-color: ${props => props.color};
     &:hover
     {
      background-color: ${props => props.hover};
      color: ${props => props.hColor};
      text-decoration: underline;
     }
    `

const Select = styled.select
    `width: 130px;
     margin: 5px 10px 5px 0px;
     border-radius: 10px;
     padding: 5px;
     disable: ${props => props.name};
    `

const Option = styled.option
    `color: ${props => props.color};
     font-weight: bold;
    `

const Label = styled.label
    ``

const Input = styled.input
    `background-color: #ABB0B8;
     color: black;
     border-radius: 10px;
     padding: 5px;
    `

const Profile = styled.div
    `border-radius: 30px;
     font-size: 16px;
    `

const ProfilePicture = styled.img
    `border-radius: 30px;
     width: 60px;
     height: 60px;
    `

const ProfileSelect = styled.select
    `margin-left: -20px;
     margin-top: 29px;
     background-color: black;
     color: white;
     cursor: pointer;
     font-size: 16px;
     border-color: black;
     border-radius: 20px;
     appearance: none;
     padding: 5px;
     &:hover
     {
        background-color: #ABB0B8;
        color: black;
     }
    `

const ProfileOption = styled.option
    `background-color: #ABB0B8;
     color: black;
    `

const ListAts = () => 
{
  const[isOpen , setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  const [ats, setAts] = useState([]);
  const [appStatus, setAppStatus] = useState('');
  const [status, setStatus] = useState("Online");
  const menuItem =
    [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaTh style = {{marginRight: 5}} />
        },

        {
            path: "/ats",
            name: "Applications",
            icon: <FaFileAlt style = {{marginRight: 5}} />
        },

        {
            path: "/employees",
            name: "Employees",
            icon: <FaUsers style = {{marginRight: 5}} />
        },

        {
            path: "/payrolls",
            name: "Payroll",
            icon: <FaFileInvoiceDollar style = {{marginRight: 5}} />
        },

        {
            path: "/trainings",
            name: "Training",
            icon: <FaAward style = {{marginRight: 5}} />
        },

        {
            path: "/benefits",
            name: "Benefits",
            icon: <FaHandHoldingMedical style = {{marginRight: 5}} />
        },

        {
            path: "/insurances",
            name: "Insurance",
            icon: <FaBriefcaseMedical style = {{marginRight: 5}} />
        },

        {
            path: "/retirements",
            name: "Retirement",
            icon: <FaTable style = {{marginRight: 5}} />
        },

        {
            path: "/employee/view",
            name: "My Account",
            icon: <FaUserAlt style = {{marginRight: 5}} />
        }, 

        {
            path: "/login",
            name: "Logout",
            icon: <FaSignOutAlt style = {{marginRight: 5}} />
        },  
    ];

  const init = () => 
  {
    atsService.getAll()
    .then(response => 
    {
      console.log('Printing ats  data', response.data);
      setAts(response.data);
    })
    .catch(error => 
    {
      console.log('Something went wrong', error);
    }) 
  };
  
  useEffect(() => 
  {
    init();
  }, []);
  
  const handleSave = (id) => 
  {
    console.log('Printing id', id);
    atsService.updateStatus(id, appStatus);
    window.location.reload(false);
  };

  const columns = 
  [
    { field: "id", headerName: "ID", width: 50 },
    { field: "fullName", headerName: "Applicant Name", headerAlign: "center", width: 150 },
    { field: "dateOfBirth", headerName: "DOB", width: 100 },
    { field: "age", headerName: "Age", width: 50 },
    { field: "race", headerName: "Race/Ethnicity", width: 130 },
    { field: "gender", headerName: "Gender", width: 100 },
    { field: "position", headerName: "Position Applied For", width: 150 },
    { field: "address", headerName: "Address", width: 280 },
    { field: "phoneNumber", headerName: "Contact Number", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "legal", headerName: "Legal Status", width: 120 },
    { field: "desirePay", headerName: "Desired Salary", width: 120 },
    { field: "highestEducation", headerName: "Highest Education Completed", width: 150 },
    { field: "relExp", headerName: "Relevant Experience", width: 150 },
    { field: "date", headerName: "Date Applied", width: 120 },
    { field: "appStatus", headerName: "Application Status", width: 150 },
    { field: "lastUpdate", headerName: "Last Updated", width: 120 },
    { field: "actions", headerName: "Update Application Status", width: 150 }
  ];

  const rows = ats.map((row) => 
  ({
      id: row.id,
      fullName: row.fullName,
      dateOfBirth: row.dateOfBirth,
      age: row.age,
      race: row.race,
      gender: row.gender,
      position: row.position,
      address: row.address,
      phoneNumber: row.phoneNumber,
      email: row.email,
      legal: row.legal,
      desirePay: row.desirePay,
      highestEducation: row.highestEducation,
      relExp: row.relExp,
      date: row.date,
      appStatus: row.appStatus,
      lastUpdate: row.lastUpdate,
  }));

  const changeStatus = (val) =>
  {
    setStatus(val);
  };

  return(
    <Container>
      <Wrapper style = {{width: isOpen ? "310px" : "50px", marginLeft: isOpen ? "-236px" : "-164px"}}>
        <NavTop>
          <NavTitle style = {{display: isOpen ? "flex" : "none", fontWeight: "bold"}}>
            <Profile>
              <ProfilePicture src = {'http://www.medqualityassurance.org/views/images/default_user.png'} />
              <p style = {{fontSize: 20, marginTop: -60, marginLeft: 75}}>Administrator</p>
            </Profile>
            <HighlightOffOutlinedIcon style = {{marginLeft: -140, marginRight: 18, color: "#ABB0B8", display: (status === "Out of Office" && "none") || (status === "Online" && "none") || (status === "Offline" && "flex") || (status === "Busy" && "none") || (status === "Away" && "none"), marginTop: 35, fontSize: 18}} />
            <BiLeftArrowCircle style = {{marginLeft: -140, marginRight: 18, color: "#C41E3A", display: (status === "Out of Office" && "flex") || (status === "Online" && "none") || (status === "Offline" && "none") || (status === "Busy" && "none") || (status === "Away" && "none"), marginTop: 35}} size = {18}/>
            <GoPrimitiveDot style = {{marginLeft: -140, marginRight: 15, color: (status === "Online" && "green") || (status === "Away" && "#FFBF00") || (status === "Busy" && "#D2042D"), display: (status === "Out of Office" && "none") || (status === "Offline" && "none"), marginTop: 35}} size = {20}/>
            <ProfileSelect onChange = {(e) => changeStatus(e.target.value)}>
              <ProfileOption value = "Online" selected>Online</ProfileOption>
              <ProfileOption value = "Away">Away</ProfileOption>
              <ProfileOption value = "Busy">Busy</ProfileOption>
              <ProfileOption value = "Offline">Offline</ProfileOption>
              <ProfileOption value = "Out of Office">Out of Office</ProfileOption>
            </ProfileSelect>
          </NavTitle>
          <TitleIcon style = {{marginLeft: isOpen ? "270px" : "12px", marginTop: isOpen ? "-90px" : "0px", marginBottom: isOpen ? "40px" : "20px"}}>
            {
              isOpen ? <FaBars onClick = {toggle} size = {25}/> : <FaBars style = {{transform: "rotate(90deg)"}} size = {25} onClick = {toggle}/>
            }
          </TitleIcon>
        </NavTop>
        {
          menuItem.map((item, index)=>(
            <NavFrame style = {{width: isOpen ? "310px" : "50px", height: isOpen ? "114px" : "113.5px"}}>
              <Link to = {item.path} key = {index} style = {{width: isOpen ? "350px" : "50px", textDecoration: "none"}}>
              <NavLink style = {{marginTop: isOpen ? 0 : 5}}>
                <NavItem style = {{display: isOpen ? "none" : "flex"}}>{item.icon}</NavItem>
                <NavItem style = {{display: isOpen ? "flex" : "none", marginLeft: 70}}>{item.icon}{item.name}</NavItem>
              </NavLink>
              </Link>
            </NavFrame>
          ))
        }
      </Wrapper>
      <Frame>
        <Title style = {{marginLeft: isOpen ? "650px" : "620px", marginTop: -900, marginBottom: -50}}><FaFileAlt style = {{marginRight: 5}}/> APPLICATIONS
          <Link to = "/ats/add" style = {{textDecoration: "none", padding: 10, marginLeft: isOpen ? "400px" : "370px", marginBottom: -25}}><Button color = "black" hover = "#ABB0B8" hColor = "black" style = {{fontSize: 18, padding: 8, width: isOpen ? "200px" : "200px"}}>APPLY INTERNALLY <FaFileSignature style = {{marginBottom: 5}} /></Button></Link>
        </Title>
        <DataGrid style = {{display: "flex", justifyContent: "center", textAlign: "center", height: '80vh', width: isOpen ? "80vw" : "80vw", marginLeft: isOpen ? "0px" : "-60px", marginRight: isOpen ? "-205px" : "0px"}} rows = {rows} columns = {columns} components = {{Toolbar: GridToolbar}} checkboxSelection disableColumnMenu /> 
      </Frame>
    </Container>
  )
}

export default ListAts;