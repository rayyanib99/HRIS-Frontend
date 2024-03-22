import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import trainingService from '../../services/trainingService';

const ListTraining = () => {

    const [trainings, setTrainings] = useState([]);

    const init = () => {
        trainingService.getAll()
        .then(response => {
          console.log('Printing trainings  data', response.data);
          setTrainings(response.data);
        })
        .catch(error => {
          console.log('Something went wrong', error);
        }) 
    }
  
    useEffect(() => {
      init();
    }, []);
  
    const handleDelete = (id) => {
      console.log('Printing id', id);
      trainingService.remove(id)
        .then(response => {
          console.log('Trainings deleted successfully', response.data);
          init();
        })
        .catch(error => {
          console.log('Something went wrong', error);
        })
    }



  return (
    <div className="container" style = {{marginTop: -1560}}>
    <h3>List of Employee's Training Required</h3>
    <hr/>
    <div>
      <Link to="/add" className="btn btn-primary mb-2 ">Add Training</Link>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Training Name</th>
            <th>Completed</th>
            <th>Employee ID</th>
            <th>Last update</th>
          </tr>
        </thead>
        <tbody>
        {
          trainings.map(training => (
            <tr key={training.id}>
              <td>{training.trainingName}</td>
              <td>{training.completed}</td>
              <td>{training.empId}</td>
              
              
              <td>
                <Link className="btn btn-info" to={`/trainings/edit/${training.id}`}>Update</Link>
                
                <button className="btn btn-danger ml-2   md" onClick={() => {
                  handleDelete(training.id);
                }}>Delete</button>
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
      
    </div>
  </div>
  )
}

export default ListTraining