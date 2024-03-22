import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import insuranceService from '../../services/insuranceService';

const ListInsurance = () => {


    const [insurances, setInsurances] = useState([]);

    const init = () => {
        insuranceService.getAll()
        .then(response => {
          console.log('Printing Insurance data', response.data);
          setInsurances(response.data);
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
      insuranceService.remove(id)
        .then(response => {
          console.log('Insurance deleted successfully', response.data);
          init();
        })
        .catch(error => {
          console.log('Something went wrong', error);
        })
    };

  return (
    <div className="container" style = {{marginTop: -1560}}>
    <h3>List of Employee Insurance</h3>
    <hr/>
    <div>
      <Link to="/add" className="btn btn-primary mb-2 ">Add Insurance</Link>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Health Prem</th>
            <th>Life Prem</th>
            <th>Dental Prem</th>
            <th>Employee ID</th>
            <th>Last update</th>
          </tr>
        </thead>
        <tbody>
        {
          insurances.map(insurance => (
            <tr key={insurance.id}>
              <td>{insurance.healthPrem}</td>
              <td>{insurance.lifePrem}</td>
              <td>{insurance.dentalPrem}</td>
              <td>{insurance.empId}</td>
              <td>{insurance.lastUpdate}</td>
              
              <td>
                <Link className="btn btn-info" to={`/insurances/edit/${insurance.id}`}>Update</Link>
                
                <button className="btn btn-danger ml-2   md" onClick={() => {
                  handleDelete(insurance.id);
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

export default ListInsurance