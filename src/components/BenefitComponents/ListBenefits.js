import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import benefitsService from '../../services/benefitsService';

const ListBenefits = () => 
{
    const [benefits, setBenefits] = useState([]);

    const init = () => 
    {
      benefitsService.getAll()
      .then(response => 
      {
        console.log('Printing Benefits data', response.data);
        setBenefits(response.data);
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
      benefitsService.remove(id)
      .then(response => 
      {
        console.log('Benefits deleted successfully', response.data);
        init();
      })
      .catch(error => 
      {
        console.log('Something went wrong', error);
      })
    };

  return (
    <div className="container" style = {{marginTop: -1560}}>
    <h3>List of Employee Benefits</h3>
    <hr/>
    <div>
      <Link to="/add" className="btn btn-primary mb-2 ">Add Benefits</Link>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Health Insurance</th>
            <th>Life Insurance</th>
            <th>Dental Insurance</th>
            <th>Retirement Plan</th>
            <th> Pto</th>
            <th>Tuition Assistance</th>
            <th>Employee ID</th>
            <th>last update</th>
          </tr>
        </thead>
        <tbody>
        {
          benefits.map(benefit => (
            <tr key={benefit.id}>
              <td>{benefit.healthInsurance}</td>
              <td>{benefit.lifeInsurance}</td>
              <td>{benefit.dentalInsurance}</td>
              <td>{benefit.retirementPlan}</td>
              <td>{benefit.pto}</td>
              <td>{benefit.tuitionAssistance}</td>
              <td>{benefit.empId}</td>
              <td>{benefit.lastUpdate}</td>
              <td>
                <Link className="btn btn-info" to={`/benefit/edit/${benefit.id}`}>Update</Link>
                <button className="btn btn-danger ml-2   md" onClick={() => 
                {
                  handleDelete(benefit.id);
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

export default ListBenefits;