import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import payrollService from '../../services/payrollService';
import axios from 'axios';
import { GoPrimitiveDot } from 'react-icons/go';
import { BiLeftArrowCircle } from 'react-icons/bi';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import 
{
    FaFileAlt,
    FaBars,
    FaAward,
    FaSignOutAlt,
    FaFileInvoiceDollar,
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

const ListPayroll = () => 
{ 
    const[isOpen, setIsOpen] = useState(false);
    const[status, setStatus] = useState("Online");
    const toggle = () => setIsOpen (!isOpen);
    const [payrolls, setPayrolls] = useState([]);
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
    
    const init = () => 
    {
        payrollService.getAll()
        .then(response => 
        {
          console.log('Printing Payroll data', response.data);
          setPayrolls(response.data);
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
  
    const handleDelete = (id) => 
    {
      console.log('Printing id', id);
      payrollService.remove(id)
        .then(response => 
          {
          console.log('Payroll deleted successfully', response.data);
          init();
        })
        .catch(error => 
          {
          console.log('Something went wrong', error);
        })
    };

    const onInputChange = (e) => 
    {
      axios.get(`http://localhost:8080/api/v1/payroll/search?query=${e}`)
      .then(result => 
      {
        setPayrolls(result.data)  
      })
    };

    const changeStatus = (val) =>
    {
      setStatus(val);
    };

  return (
    <Container>
      <Wrapper style = {{width: isOpen ? "310px" : "50px", marginLeft: isOpen ? "-51px" : "-51px"}}>
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
    <h3>List of Employee Payrolls</h3>
    <hr/>
    <div>
      <Link to="/add" className="btn btn-primary mb-2 ">Add  Employee Payroll</Link>
      <table className=" table table-bordered table-striped ">
        <thead className="thead-dark">
          <tr>
            <th>Employee ID</th>
            <th> Hours Worked</th>
            <th>Pto Hours</th>
            <th>Hourly Rate</th>
            <th>Gross Salary</th>
            <th>Salary Payed</th>
            <th>Yearly Bonus</th>
            <th>State Tax</th>
            <th>Federal Tax</th>
            <th>Employment Type</th>
            <th>Pay Cycle</th>
            <th>Effective Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          payrolls.map(payroll => (
            <tr key={payroll.id}>
              <td>{payroll.empID}</td>
              <td>{payroll.weeklyHours}</td>
              <td>{payroll.ptoHours}</td>
              <td>{payroll.hourlyRate}</td>
              <td>{payroll.grossSalary}</td>
              <td>{payroll.salary}</td>
              <td>{payroll.yearlyBonus}</td>
              <td>{payroll.stateTax}</td>
              <td>{payroll.federalTax}</td>
              <td>{payroll.employmentType}</td>
              <td>{payroll.payCycle}</td>
              <td>{payroll.effectiveDate}</td>
              <td>
                <Link className="btn btn-info" to={`/payroll/edit/${payroll.id}`}>Update</Link>
                <button className="btn btn-danger ml-2   md" onClick={() => 
                {
                  handleDelete(payroll.id);
                }}>Delete</button>
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
    </Frame>
  </Container>
  )
}

export default ListPayroll;