import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import insuranceService from '../../services/insuranceService';

const AddInsurance = () => 
{
    const[healthPrem, setHealthPrem] = useState();
    const[lifePrem, setLifePrem] = useState();
    const[dentalPrem, setDentalPrem] = useState();
    const[empId, setEmpId] = useState();
    
    const navigate = useNavigate();
    const {id} = useParams();

    const saveInsurance = (e) => {
        e.preventDefault();
        
        const Insurance = {healthPrem, lifePrem, dentalPrem, empId};
        if (id) {
            //update
            insuranceService.update(Insurance)
                .then(response => {
                    console.log('Insurance data updated successfully', response.data);
                    navigate('/');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                }) 
        } else {
            //create
            insuranceService.create(Insurance)
            .then(response => {
                console.log("Insurance added successfully", response.data);
                navigate("/");
            })
            .catch(error => {
                console.log('something went wrong', error);
            })
        }
    }

    useEffect(() => {
        if (id) {
            insuranceService.get(id)
                .then(insurance => {
                    setHealthPrem(insurance.data.healthPrem);
                    setLifePrem(insurance.data.lifePrem);
                    setDentalPrem(insurance.data.dentalPrem);
                    setEmpId(insurance.data.empId);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [id])

  return (
    <div className="container">
            <h3>Add Insurance</h3>
            <hr/>
            <div className='card-body'>
            <form>
                <div className="form-group">
                <label className = "form-label"> Health Prem: </label>
                    <input 
                        type="number" 
                        className="form-control col-4"
                        id="healthPrem"
                        value={healthPrem}
                        onChange={(e) => setHealthPrem(e.target.value)}
                        placeholder="Enter Health Prem Value"
                    />

                </div>
                <div className="form-group">
                <label className = "form-label"> Life Prem: </label>
                    <input 
                        type="number" 
                        className="form-control col-4"
                        id="lifePrem"
                        value={lifePrem}
                        onChange={(e) => setLifePrem(e.target.value)}
                        placeholder="Enter Life Prem Value"
                    />

                </div>
                
                <div className="form-group">
                <label className = "form-label"> Dental Prem: </label>
                    <input 
                        type="number" 
                        className="form-control col-4"
                        id="retirementPlan"
                        value={dentalPrem}
                        onChange={(e) => setDentalPrem(e.target.value)}
                        placeholder="Enter dental Prem Value"
                    />
                </div>
                <div className="form-group">
                <label className = "form-label"> Employee ID: </label>
                    <input 
                        type="number" 
                        className="form-control col-4"
                        id="empId"
                        value={empId}
                        onChange={(e) => setEmpId(e.target.value)}
                        placeholder="Enter Employee ID"
                    />
                </div>
                
            
                <div >
                    <button onClick={(e) => saveInsurance(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            </div>
            <hr/>
            <Link to="/">Back to List</Link>
        </div>
  )
}

export default AddInsurance