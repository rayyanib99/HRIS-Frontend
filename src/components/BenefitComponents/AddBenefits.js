import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import benefitsService from '../../services/benefitsService';

const AddBenefits = () => 
{
    const[healthInsurance, setHealthInsurance] = useState('');
    const[lifeInsurance, setLifeInsurance] = useState('');
    const[dentalInsurance, setDentalInsurance] = useState('');
    const[retirementPlan, setRetirementPlan] = useState('');
    const[pto, setPto] = useState('');
    const[tuitionAssistance, setTuitionAssistance] = useState('');
    const[empId, setEmpId] = useState(0);
    
    const navigate = useNavigate();
    const {id} = useParams();

    const saveBenefits = (e) => 
    {
        e.preventDefault();
        
        const benefit = {healthInsurance, lifeInsurance, dentalInsurance, retirementPlan, pto, tuitionAssistance, empId};

        if (id) 
        {
            //update
            benefitsService.update(benefit)
            .then(response => 
            {
                console.log('Benefit data updated successfully', response.data);
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
            benefitsService.create(benefit)
            .then(response => 
            {
                console.log("Benefit added successfully", response.data);
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
            benefitsService.get(id)
            .then(benefit => 
            {
                setHealthInsurance(benefit.data.healthInsurance);
                setLifeInsurance(benefit.data.lifeInsurance);
                setDentalInsurance(benefit.data.dentalInsurance);
                setRetirementPlan(benefit.data.retirementPlan);
                setPto(benefit.data.pto);
                setTuitionAssistance(benefit.data.tuitionAssistance);
                setEmpId(benefit.data.empId);
            })
            .catch(error => 
            {
                console.log('Something went wrong', error);
            })
        }
    }, [id]);

  return (
    <div className="container">
            <h3>Add Benefits</h3>
            <hr/>
            <div className='card-body'>
            <form>
            <label className = "form-label "> Health Insurance:? </label>
                <div >
                <label className = "form-label m-2"> Yes </label>
                    <input 
                        type="radio" 
                        value="Yes"
                        name='y'
                        onChange={(e) => setHealthInsurance(e.target.value)} />
                     <label className = "form-label m-2 "> Not</label>
                    <input 
                        type="radio" 
                        value="No"
                        name='y'
                        onChange={(e) => setHealthInsurance(e.target.value)} />
                </div>
                <label className = "form-label "> Life Insurance:? </label>
                <div >
                <label className = "form-label m-2"> Yes </label>
                    <input 
                        type="radio" 
                        value="Yes"
                        name='f'
                        onChange={(e) => setLifeInsurance(e.target.value)}/>
                     <label className = "form-label m-2 "> Not</label>
                    <input 
                        type="radio" 
                        value="No"
                        name='f'
                        onChange={(e) => setLifeInsurance(e.target.value)}/>
                </div>
                <label className = "form-label "> Dental Insurance:? </label>
                <div >
                <label className = "form-label m-2"> Yes </label>
                    <input 
                        type="radio" 
                        value="Yes"
                        name='d'
                        onChange={(e) => setDentalInsurance(e.target.value)}/>
                     <label className = "form-label m-2 "> Not</label>
                    <input 
                        type="radio" 
                        value="No"
                        name='d'
                        onChange={(e) => setDentalInsurance(e.target.value)}/>
                </div>
                <label className = "form-label "> Retirement Plan:? </label>
                <div >
                <label className = "form-label m-2"> Yes </label>
                    <input 
                        type="radio" 
                        value="Yes"
                        name='r'
                        onChange={(e) => setRetirementPlan(e.target.value)} />
                     <label className = "form-label m-2 "> Not</label>
                    <input 
                        type="radio" 
                        value="No"
                        name='r'
                        onChange={(e) => setRetirementPlan(e.target.value)}/>
                </div>
                <label className = "form-label "> PTO:? </label>
                <div>
                    <label className = "form-label m-2"> Yes </label>
                    <input 
                        type="radio" 
                        value="Yes"
                        name='p'
                        onChange={(e) => setPto(e.target.value)}/>
                     <label className = "form-label m-2 "> No</label>
                    <input 
                        type="radio" 
                        value="No"
                        name='p'
                        onChange={(e) => setPto(e.target.value)} />
                </div>
                <label className = "form-label "> Tuition Assistance:? </label>
                <div >
                    <label className = "form-label m-2"> Yes </label>
                    <input 
                        type="radio" 
                        value="Yes"
                        name='t'
                        onChange={(e) => setTuitionAssistance(e.target.value)} />
                    <label className = "form-label m-2 "> Not</label>
                    <input 
                        type="radio" 
                        value="No"
                        name='t'
                        onChange={(e) => setTuitionAssistance(e.target.value)}/>
                </div> 
                <div className="form-group">
                <label className = "form-label"> Employee ID: </label>
                    <input 
                        type="number" 
                        className="form-control col-4"
                        id="empId"
                        value={empId}
                        onChange={(e) => setEmpId(e.target.value)}
                        placeholder="Enter Employee ID"/>
                </div>
                <div >
                    <button onClick={(e) => saveBenefits(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            </div>
            <hr/>
            <Link to="/">Back to List</Link>
        </div>
  )
}

export default AddBenefits;