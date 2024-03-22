import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import payrollService from '../../services/payrollService';

const AddPayroll = () => 
{    
    const[empID, setEmpID] = useState();
    const[weeklyHours, setWeeklyHours] = useState(0);
    const[ptoHours, setPtoHours] = useState();
    const[hourlyRate, setHourlyRate] = useState(0);
    const[grossSalary, setGrossSalary] = useState( );
    const[salary, setSalary] = useState();
    const[yearlyBonus, setYearlyBonus] = useState();
    const[stateTax, setStateTax] = useState();
    const[federalTax, setFederalTax] = useState();
    const[employmentType, setEmploymentType] = useState('');
    const[payCycle, setPayCycle] = useState('');

    const navigate = useNavigate();
    const {id} = useParams();

    const savePayrolls = (e) => 
    {
        e.preventDefault();
        
        const Payrolls = {empID, weeklyHours,  ptoHours, hourlyRate, grossSalary, salary, yearlyBonus, stateTax, federalTax, employmentType, payCycle};

        if (id) 
        {
            //update
            payrollService.update(Payrolls)
            .then(response => 
            {
                console.log('Payrolls data updated successfully', response.data);
                navigate('/');
            })
            .catch(error => 
            {
                    console.log('Something went wrong', error);
            }) 
        } 
        
        else 
        {
            //create
            payrollService.create(Payrolls)
            .then(response => 
            {
                console.log("Payrolls added successfully", response.data);
                navigate("/");
            })
            .catch(error => 
            {
                console.log('something went wrong', error);
            })
        }
    };
   
    useEffect(() => 
    {
        if (id) 
        {
            payrollService.get(id)
            .then(payroll => 
            {
                setEmpID(payroll.data.empID);
                setWeeklyHours(payroll.data.weeklyHours);
                setPtoHours(payroll.data.ptoHours);
                setHourlyRate(payroll.data.hourlyRate);
                setGrossSalary(payroll.data.grossSalary);
                setSalary(payroll.data.salary);
                setYearlyBonus(payroll.data.yearlyBonus);
                setStateTax(payroll.data.stateTax);
                setFederalTax(payroll.data.federalTax);
                setEmploymentType(payroll.data.employmentType);
                setPayCycle(payroll.data.payCycle); 
            })
            .catch(error => 
            {
                    console.log('Something went wrong', error);
            })
        }
    }, [id]);

  return (
    <div className="container">
    <h3>Add Payroll Record</h3>
    <hr/>
    <div className='card-body'>
    <form>
        <div className="form-group">
        <label className = "form-label"> Employee ID: </label>
            <input 
                type="number" 
                className="form-control col-4"
                id="empID"
                value={empID}
                onChange={(e) => setEmpID(e.target.value)}
                placeholder="Enter Employee ID"/>
        </div>
        <div className="form-group">
        <label className = "form-label"> Hours Worked: </label>
            <input 
                type="number" 
                className="form-control col-4"
                id="weeklyHours"
                value={weeklyHours}
                
                onChange={ (e) => setWeeklyHours(e.target.value) }
                placeholder="Enter weeklyHours"/>      
        </div>
        <div className="form-group">
        <label className = "form-label"> Hourly Rate: </label>
            <input 
                type="number" 
                className="form-control col-4"
                id="hourlyRate"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(e.target.value) }
                placeholder="Enter hourlyRate"
            />
        </div>
        <div className="form-group">
        <label className = "form-label"> Gross Salary: </label>
           <p>{grossSalary }</p>
        </div>
        <div className="form-group">
        <label className = "form-label" > STate Tax: </label>
           <p >{stateTax }</p>
        </div>
        <div className="form-group">
        <label className = "form-label"> Pto Hours: </label>
            <input 
                type="number" 
                className="form-control col-4"
                id="ptoHours"
                value={ptoHours}
                onChange={(e) => setPtoHours(e.target.value)}
                placeholder="Enter ptoHours"
            />
        </div>
        <div className="form-group">
        <label className = "form-label"> salary: </label>
            <input 
                type="number" 
                className="form-control col-4"
                id="salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                placeholder="salary"
            />
        </div>
        <div className="form-group">
        <label className = "form-label"> Yearly Bonus: </label>
            <input 
                type="number" 
                className="form-control col-4"
                id="yearlyBonus"
                value={yearlyBonus}
                onChange={(e) => setYearlyBonus(e.target.value)}
                placeholder="yearlyBonus"
            />
        </div>
        <div className="form-group">
        <label className = "form-label"> Federal Tax: </label>
            <input 
                type="number" 
                className="form-control col-4"
                id="federalTax"
                value={federalTax}
                onChange={(e) => setFederalTax(e.target.value)}
                placeholder="federalTax"
            />
        </div>
        <div className="form-group">
        <label className = "form-label"> Pay Cycle: </label>
            <input 
                type="text" 
                className="form-control col-4"
                id="payCycle"
                value={payCycle}
                onChange={(e) => setPayCycle(e.target.value)}
                placeholder="payCycle"
            />
        </div>
        <div className="container p-2">
            <p>Employment Type</p>
            <select
                className="custom-select"
                value={employmentType}
                onChange={(e) => 
                {
                    const selectedFood = e.target.value;
                    setEmploymentType(selectedFood);
                }}>
                <option value="Full-TIme ">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
            </select>
        </div>    
        <div>
            <button onClick={(e) => savePayrolls(e)} className="btn btn-primary">Save</button>
        </div>
    </form>
    </div>
    <hr/>
    <Link to="/">Back to List</Link>
</div>
  )
}

export default AddPayroll;