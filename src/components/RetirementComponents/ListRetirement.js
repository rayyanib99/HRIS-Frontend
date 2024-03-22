import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import retirementService from '../../services/retirementService';

const ListRetirement = () => {

    const [retirements, setRetirements] = useState([]);

    const init = () => {
        retirementService.getAll()
        .then(response => {
          console.log('Printing Retirements  data', response.data);
          setRetirements(response.data);
        })
        .catch(error => {
          console.log('Something went wrong', error);
        }) 
    }
  
    useEffect(() => {
      init();
    }, []);
  
    const handleDelete = (id) => 
    {
      console.log('Printing id', id);
      retirementService.remove(id)
        .then(response => {
          console.log('Retirement deleted successfully', response.data);
          init();
        })
        .catch(error => {
          console.log('Something went wrong', error);
        })
    };

  return (
    <div className="container" style = {{marginTop: -1560}}>
    <h3>List of Employee Retirement Plan</h3>
    <hr/>
    <div>
      <Link to="/add" className="btn btn-primary mb-2 ">Add Retirement Plan</Link>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Amount 401k</th>
            <th>Amount 403b</th>
            <th>Amount 457b</th>
            <th>Employee ID</th>
            <th>Last update</th>
          </tr>
        </thead>
        <tbody>
        {
          retirements.map(retirements => (
            <tr key={retirements.id}>
              <td>{retirements.amount_401k}</td>
              <td>{retirements.amount_403b}</td>
              <td>{retirements.amount_457b}</td>
              <td>{retirements.empId}</td>
              <td>{retirements.lastUpdate}</td>
              
              <td>
                <Link className="btn btn-info" to={`/retirement/edit/${retirements.id}`}>Update</Link>
                
                <button className="btn btn-danger ml-2 md" onClick={() => {
                  handleDelete(retirements.id);
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

export default ListRetirement