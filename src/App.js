import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from "./components/Header";
import ListEmployee from './components/EmployeeComponents/ListEmployee';
import AddEmployee from './components/EmployeeComponents/AddEmployee';
import UpdateEmployee from './components/EmployeeComponents/UpdateEmployee';
import ListAts from './components/AtsComponents/ListAts';
import AddAts from './components/AtsComponents/AddAts';
import ListTraining from './components/TrainingComponents/ListTraining';
import ListRetirement from './components/RetirementComponents/ListRetirement';
import ListPayroll from './components/PayrollComponents/ListPayroll';
import ListInsurance from './components/InsuranceComponents/ListInsurance';
import ListBenefits from './components/BenefitComponents/ListBenefits';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Login from './components/Login';
import Support from './components/Support';

const Container = styled.div
  `height: 140vh;
   width: 100%;
   overflow: hidden;
  `

const Wrapper = styled.div
  `width: 100%;
   height: 0%;
   display: flex;
   justify-content: center;
   align-items: center;
   border-bottom: 1px solid black;
   `

const App = () =>
{
  return (
    <Container>
      <Router>
      <Header />
      <Sidebar />
      <Wrapper>
        <Routes>
          <Route path = "/" element = {<Dashboard />} />
          <Route path = "/ats" element = {<ListAts />} />
          <Route path = "/ats/add" element = {<AddAts />} />
          <Route path = "/employees" element = {<ListEmployee />} />
          <Route path = "/employee/add" element = {<AddEmployee />} />
          <Route path = "/payrolls" element = {<ListPayroll />} />
          <Route path = "/trainings" element = {<ListTraining />} />
          <Route path = "/benefits" element = {<ListBenefits />} />
          <Route path = "/insurances" element = {<ListInsurance />} />
          <Route path = "/retirements" element = {<ListRetirement />} />
          <Route path = "/employee/view" element = {<UpdateEmployee />} />
          <Route path = "/login" element = {<Login />} />
          <Route path = "/support" element = {<Support />} />
        </Routes>         
      </Wrapper>
      <Footer />
      </Router>
    </Container>
  )
}

export default App;