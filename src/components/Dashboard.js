import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoPrimitiveDot } from 'react-icons/go';
import { BiLeftArrowCircle } from 'react-icons/bi';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import 
{
    FaFileAlt,
    FaBars,
    FaAward,
    FaFileInvoiceDollar,
    FaSignOutAlt,
    FaBriefcaseMedical,
    FaUsers,
    FaUserAlt,
    FaTh,
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
     margin-top: -450px;
     margin-left: -50px;
     text-decoration: underline;
     display: flex;
     justify-content: center;
     align-items: center;
     position: absolute;
    `

const Card = styled.div
    `width: 350px;
     height: 330px;
     margin-left: -800px;
     margin-top: -10px;
     border: 1px solid black;
     border-radius: 30px;
    `

const CardImage = styled.img
    `width: 345px;
     height: 261px;
     border-radius: 30px 30px 0px 0px;
     padding: 10px;
    `

const CardBottom = styled.div
    `background-color: #ABB0B8;
     height: 67px;
     border-radius: 0px 0px 30px 30px;
    `
    
const CardTitle = styled.h3
    `display: flex;
     justify-content: center;
     padding: 15px;
     font-size: 24px;
     font-weight: bold;
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

const Dashboard = () => 
{
  const[isOpen, setIsOpen] = useState(false);
  const[status, setStatus] = useState("Online");
  const toggle = () => setIsOpen (!isOpen);
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
            icon: <FaSignOutAlt style = {{marginRight: 5, transform: "rotate(180deg)"}} />
        },  
    ];

    const changeStatus = (val) =>
    {
      setStatus(val);
    };

  return (
    <Container>
      <Wrapper style = {{width: isOpen ? "310px" : "50px", marginLeft: isOpen ? "-64px" : "-152px"}}>
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
      <Frame style = {{marginLeft: isOpen ? "850px" : "100px"}}>
        <Title><FaTh style = {{marginRight: 5, marginLeft: isOpen ? "170px" : "650px"}}/> DASHBOARD</Title>
        <Card style = {{marginLeft: isOpen ? "-550px" : "-50px"}}>
          <Link to = {"/ats"} style = {{textDecoration: "none", color: "black"}}>
            <CardImage src = {'https://grants.nih.gov/sites/all/themes/grants2019/images/home-apply-blue.png'} />
            <CardBottom>
              <CardTitle>Applications</CardTitle>
            </CardBottom>
          </Link>
        </Card>
        <Card style = {{marginLeft: isOpen ? "25px" : "50px"}}>
          <Link to = {"/employees"} style = {{textDecoration: "none", color: "black"}}>
            <CardImage src = {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwyV2bXEpRQsckxE2q47Lit51URFj9IZWleg&usqp=CAU'} />
            <CardBottom>
              <CardTitle>Employees</CardTitle>
            </CardBottom>
          </Link>
        </Card>
        <Card style = {{marginLeft: isOpen ? "25px" : "50px"}}>
          <Link to = {"/payrolls"} style = {{textDecoration: "none", color: "black"}}>
            <CardImage src = {'https://t4.ftcdn.net/jpg/01/65/99/61/360_F_165996128_BH9hqy2eZWTYTeRocyHRc8AKTfn9PfiR.jpg'} />
            <CardBottom>
              <CardTitle>Payroll</CardTitle>
            </CardBottom>
          </Link>
        </Card>
        <Card style = {{marginLeft: isOpen ? "25px" : "50px",  marginRight: isOpen ? "-585px" : "0px"}}>
          <Link to = {"/trainings"} style = {{textDecoration: "none", color: "black"}}>
            <CardImage src = {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8obt9SA4L8resgCHwxbgqt6IPJPvQypyyNq0UrJt_R5fbTaqk3GfQpNvTvPYWUaIN9EU&usqp=CAU'} />
            <CardBottom>
              <CardTitle>Training</CardTitle>
            </CardBottom>
          </Link>
        </Card>
        <Card style = {{marginLeft: isOpen ? "-890px" : "-1550px", marginBottom: "-750px"}}>
          <Link to = {"/benefits"} style = {{textDecoration: "none", color: "black"}}>
            <CardImage src = {'https://thumbs.dreamstime.com/b/employee-benefits-personal-leave-insurance-life-retirement-plan-child-care-paid-vacation-sick-health-diagram-color-flat-190273487.jpg'} />
            <CardBottom>
              <CardTitle>Benefits</CardTitle>
            </CardBottom>
          </Link>
        </Card>
        <Card style = {{marginLeft: isOpen ? "25px" : "50px", marginBottom: "-750px"}}>
          <Link to = {"/insurances"} style = {{textDecoration: "none", color: "black"}}>
            <CardImage src = {'https://img.freepik.com/premium-vector/insurance-icon-set_188544-5420.jpg'} />
            <CardBottom>
              <CardTitle>Insurance Premiums</CardTitle>
            </CardBottom>
          </Link>
        </Card>
        <Card style = {{marginLeft: isOpen ? "25px" : "50px", marginBottom: "-750px"}}>
          <Link to = {"/retirements"} style = {{textDecoration: "none", color: "black"}}>
            <CardImage src = {'https://www.mortgagecalculator.org/images/old-couple-at-the-bank.png'} />
            <CardBottom>
              <CardTitle>Retirement Plans</CardTitle>
            </CardBottom>
          </Link>
        </Card>
        <Card style = {{marginLeft: isOpen ? "25px" : "50px", marginBottom: "-750px"}}>
          <Link to = {"/employee/view"} style = {{textDecoration: "none", color: "black"}}>
            <CardImage src = {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2H1OKinJkVbLG1o1qggOVqRkmHa8OOKXlNkQ3IOpWn_9yQk5PZNPTG9S7dRXacxgWqvk&usqp=CAU'} />
            <CardBottom>
              <CardTitle>My Account</CardTitle>
            </CardBottom>
          </Link>
        </Card>
    </Frame>
    </Container>
  )
}

export default Dashboard;