import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import trainingService from '../../services/trainingService';

const AddTraining = () => 
{
    const[trainingName, setTrainingName] = useState('');
    const[completed, setCompleted] = useState('');
    const[empId, setEmpId] = useState();
    
    const navigate = useNavigate();
    const {id} = useParams();

    const saveTrinings = (e) => {
        e.preventDefault();
        
        const Trainings = {trainingName, completed,  empId};
        if (id) {
            //update
            trainingService.update(Trainings)
                .then(response => {
                    console.log('Trainings data updated successfully', response.data);
                    navigate('/');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                }) 
        } else {
            //create
            trainingService.create(Trainings)
            .then(response => {
                console.log("Trainings added successfully", response.data);
                navigate("/");
            })
            .catch(error => {
                console.log('something went wrong', error);
            })
        }
    }

    useEffect(() => {
        if (id) {
            trainingService.get(id)
                .then(training => {
                    setTrainingName(training.data.trainingName);
                    setCompleted(training.data.completed);
                    setEmpId(training.data.empId);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [id])

  return (
    <div className="container">
            <h3>Add Training Section</h3>
            <hr/>
            <div className='card-body'>
            <form>
                <div className="form-group">
                <label className = "form-label"> TrainingName: </label>
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="trainingName"
                        value={trainingName}
                        onChange={(e) => setTrainingName(e.target.value)}
                        placeholder="Enter Training Name"
                    />
                </div>
                <div className="form-group">
                <label className = "form-label"> Completed: </label>
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="completed"
                        value={completed}
                        onChange={(e) => setCompleted(e.target.value)}
                        placeholder="Enter Yes or No"
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
                    <button onClick={(e) => saveTrinings(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            </div>
            <hr/>
            <Link to="/">Back to List</Link>
        </div>
  )
}

export default AddTraining;