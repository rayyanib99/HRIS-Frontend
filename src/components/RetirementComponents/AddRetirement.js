import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import retirementService from '../../services/retirementService';

const AddRetirement = () => {

    const[amount_401k, setAmount_401k] = useState();
    const[amount_403b, setAmount_403b] = useState();
    const[amount_457b, setAmount_457b] = useState();
    const[empId, setEmpId] = useState();
    
    const navigate = useNavigate();
    const {id} = useParams();

    const saveRetirements = (e) => {
        e.preventDefault();
        
        const Retirements = {amount_401k, amount_403b, amount_457b, empId};
        if (id) {
            //update
            retirementService.update(Retirements)
                .then(response => {
                    console.log('Retirement data updated successfully', response.data);
                    navigate('/');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                }) 
        } else {
            //create
            retirementService.create(Retirements)
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
            retirementService.get(id)
                .then(retirement => {
                    setAmount_401k(retirement.data.amount_401k);
                    setAmount_403b(retirement.data.amount_403b);
                    setAmount_457b(retirement.data.amount_457b);
                    setEmpId(retirement.data.empId);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [id])

  return (
    <div className="container">
            <h3>Add Retirement Plan</h3>
            <hr/>
            <div className='card-body'>
            <form>
                <div className="form-group">
                <label className = "form-label"> Amount 401k: </label>
                    <input 
                        type="number" 
                        className="form-control col-4"
                        id="amount_401k"
                        value={amount_401k}
                        onChange={(e) => setAmount_401k(e.target.value)}
                        placeholder="Enter Amount_401k Value"
                    />

                </div>
                <div className="form-group">
                <label className = "form-label"> Amount 403b: </label>
                    <input 
                        type="number" 
                        className="form-control col-4"
                        id="amount_403b"
                        value={amount_403b}
                        onChange={(e) => setAmount_403b(e.target.value)}
                        placeholder="Enter Amount_403b Value"
                    />

                </div>
                
                <div className="form-group">
                <label className = "form-label"> Amount 457b: </label>
                    <input 
                        type="number" 
                        className="form-control col-4"
                        id="amount_457b"
                        value={amount_457b}
                        onChange={(e) => setAmount_457b(e.target.value)}
                        placeholder="Enter amount_457b Value"
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
                    <button onClick={(e) => saveRetirements(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            </div>
            <hr/>
            <Link to = "/">Back to List</Link>
        </div>
  )
}

export default AddRetirement;