import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import employeeService from '../../services/employeeService';
import axios from 'axios';
import { MdAddModerator, MdRemoveModerator } from 'react-icons/md';
import { GoPrimitiveDot } from 'react-icons/go';
import { BiLeftArrowCircle } from 'react-icons/bi';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import 
{
    FaFileAlt,
    FaTrashAlt,
    FaBars,
    FaUsers,
    FaAward,
    FaSignOutAlt,
    FaFileInvoiceDollar,
    FaTh,
    FaBriefcaseMedical,
    FaUserPlus,
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
 
const Table = styled.table
    `margin-left: -938px;
      margin-top: 550px;
      height: 65vh;
      text-align: center;
      align-items: center;
      border: 1px solid black;
      background-color: #ABB0B8;
      position: absolute;
      Overflow-x: "hidden"
    `
 
const TableHead = styled.thead
    `background-color: black;
      color: white;
      display: block;
    `
 
const TableRow = styled.tr
    `background-color: #ABB0B8;`
 
const TableHeader = styled.th
    `padding: 10px;
      background-color: black;
      border: 1px solid black;
      text-align: center;
      height: 100px;
      width: 150px;
    `
 
const TableBody = styled.tbody
    `background-color: #ABB0B8;
      max-height: 55vh;
      overflow-y: auto;
      display: block;
      &::-webkit-scrollbar
      {
         width: 14px;
         height: 14px;
      }
      &::-webkit-scrollbar-track
      {
         border: 1px solid black;
         border-radius: 10px;
      }
      &::-webkit-scrollbar-thumb 
      {
         background: black;
         border-radius: 10px;
      }
      &::-webkit-scrollbar-thumb:hover 
      {
         background: #8A8A8A;
      }
    `
 
const TableData = styled.td
    `padding: 5px;
      align-items: center;
      text-align: center;
      border-bottom: 1px solid black;
      background-color: #ABB0B8;
      height: 100px;
      width: 160px;
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

const Filter = styled.div
    `margin-left: -900px;
     margin-bottom: 125px;
     margin-top: -20px;
     background-color: black;
     color: white;
     padding: 7px;
     border-radius: 10px;
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
  
const ListEmployee = () => 
{
  const [employees, setEmployees] = useState([]);
  const[isOpen , setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
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

  const onInputChange = (e) => 
  {
    axios.get(`http://localhost:8080/api/v1/employee/search?query=${e}`)
    .then(result => 
    {
      setEmployees(result.data)  
    })
  };

  const init = () => 
  {
    employeeService.getAll()
    .then(response => 
    {
      console.log('Printing users data', response.data);
      setEmployees(response.data);
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
    
  const Delete = (id, fName, lName, admin) => 
  {
    console.log('Printing id', id);
    if(admin === "Administrator")
    {
      alert("WARNING: Cannot Delete Administrator Account.");
    }

    else
    {
      var message = window.confirm("CAUTION: Account of Employee " + fName + " " + lName + " Will Be Deleted Permanently.");
      if(message === true)
      {
        employeeService.remove(id)
        .then(response => 
        {
          console.log('Employee deleted successfully', response.data);
          init();
        })

        .catch(error => 
        {
          console.log('Something went wrong', error);
        })
      }
    } 
  };

  const Admin = (id, isAdmin, fName, lName) =>
  {
    if(isAdmin === "Employee")
    {
      var message1 = window.confirm("CAUTION: You Are Granting Administrator Access to " + fName + " " + lName + ".");
      if(message1 === true)
      {
        employeeService.updateAccess(id, "Administrator");
        window.location.reload(false);
      }
    }

    else
    {
      var message2 = window.confirm("CAUTION: You Are Removing Administrator Access For " + fName + " " + lName + ".");
      if(message2 === true)
      {
        employeeService.updateAccess(id, "Employee");
        window.location.reload(false);
      }
    }
  };

  const changeStatus = (val) =>
  {
    setStatus(val);
  };

  return(
    <Container>
      <Wrapper style = {{width: isOpen ? "310px" : "50px", marginLeft: isOpen ? "-902px" : "-902px"}}>
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
        <Title style = {{marginLeft: isOpen ? "-45px" : "-110px", marginTop: -300}}><FaUsers style = {{marginRight: 5}} />EMPLOYEES
          <Link to = "/employee/add" style = {{textDecoration: "none", padding: 10, marginLeft: isOpen ? "400px" : "515px", marginBottom: -150}}><Button color = "black" hover = "#ABB0B8" hColor = "black" style = {{fontSize: 18, padding: 8, width: isOpen ? "200px" : "200px"}}>ADD EMPLOYEE<FaUserPlus style = {{marginLeft: 5, marginBottom: 5}} /></Button></Link>
        </Title>
        <Filter style = {{marginLeft: isOpen ? "-610px" : "-900px"}}>
          <Label style = {{marginRight: 5}}><b>FILTER:</b></Label>
          <Input onChange={(e) => onInputChange(e.target.value)} variant = {"outlined"} type = {"search"} />
        </Filter>
          <Table style = {{width: isOpen ? "80%" : "95%", marginLeft: isOpen ? "-658px" : "-930px"}}>
            <TableHead>
              <TableRow>
                <TableHeader>Employee ID</TableHeader>
                <TableHeader>First Name</TableHeader>
                <TableHeader>Last Name</TableHeader>
                <TableHeader>Age</TableHeader>
                <TableHeader>Email/Username</TableHeader>
                <TableHeader>Contact Number</TableHeader>
                <TableHeader>Job Title</TableHeader>
                <TableHeader>Address</TableHeader>
                <TableHeader>City</TableHeader>
                <TableHeader>State</TableHeader>
                <TableHeader>Country</TableHeader>
                <TableHeader>Zip Code</TableHeader>
                <TableHeader>Role</TableHeader>
                <TableHeader>Last Update</TableHeader>
                <TableHeader>Actions</TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
            {
              employees.map(employee => (
                <TableRow key = {employee.empId}>
                  <TableData>{employee.empId}</TableData>
                  <TableData>{employee.firstName}</TableData>
                  <TableData>{employee.lastName}</TableData>
                  <TableData>{employee.age}</TableData>
                  <TableData>{employee.email}</TableData>
                  <TableData>{employee.phoneNumber}</TableData>
                  <TableData>{employee.jobTitle}</TableData>
                  <TableData>{employee.address}</TableData>
                  <TableData>{employee.city}</TableData>
                  <TableData>{employee.state}</TableData>
                  <TableData>{employee.country}</TableData>
                  <TableData>{employee.zipCode}</TableData>
                  <TableData style = {{fontWeight: "bold", color: (employee.role === "Employee" && "black") || (employee.role === "Administrator" && "#229954")}}>{employee.role}</TableData>
                  <TableData>{employee.lastUpdate}</TableData>
                  <TableData>
                    <Button onClick = {() => Admin(employee.empId, employee.role, employee.firstName, employee.lastName)} color = "#0275d8" hover = "#ADD8E6" hColor = "black" style = {{marginBottom: 10, width: 160, display: (employee.role === "Administrator" && "none") || (employee.role === "Employee" && "flex")}}>
                      <MdAddModerator style = {{marginTop: 3, marginRight: 5}} />
                      MAKE ADMIN
                    </Button>
                    <Button onClick = {() => Admin(employee.empId, employee.role, employee.firstName, employee.lastName)} color = "#dc3545" hover = "#FAA0A0" hColor = "black" style = {{marginBottom: 10, width: 160, display: (employee.role === "Administrator" && "flex") || (employee.role === "Employee" && "none")}}>
                      <MdRemoveModerator style = {{marginTop: 3, marginRight: 5}} />
                      REMOVE ADMIN
                    </Button>
                    <Button onClick = {() => Delete(employee.empId, employee.firstName, employee.lastName, employee.role)} color = "#dc3545" hover = "#FAA0A0" hColor = "black" ><FaTrashAlt style = {{marginBottom: 5}} /> DELETE</Button>
                  </TableData>
                </TableRow>
              ))
            }
            </TableBody>
          </Table>
      </Frame>
    </Container>
  )
}
  
export default ListEmployee;