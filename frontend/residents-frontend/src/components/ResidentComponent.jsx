import React, { useState } from 'react'
import { createResident } from '../services/ResidentService'
import {useNavigate} from 'react-router-dom';

const ResidentComponent = () => {

  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [gender, setGender] = useState('')

  const [errors, setErrors] = useState({
    name: '',
    role: '',
    gender: ''
  })

  const navigator = useNavigate();

  function saveResident(r){
    r.preventDefault();

    if(validateForm){
      const resident = {name, role, gender}
      console.log(resident)
  
      createResident(resident).then((response) => {
        console.log(response.data);
        navigator('/residents')
      })
    }
    
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = {... errors}

    if(name.trim()){
      errorsCopy.name = '';
    } else {
      errorsCopy.name = "First name is required";
      valid = false;
    }

    if(role.trim()){
      errorsCopy.role = '';
    } else {
      errorsCopy.role = "Role is required";
    }

    if(role.trim()){
      errorsCopy.gender = '';
    } else {
      errorsCopy.gender = "Gender is required";
      valid = false;
    }

    setErrors(errorsCopy);

    return valid;
  }

  return (
    <div className='container'>
      <br/> <br/>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center'>Add Resident</h2>
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>Name:</label>
                <input
                    type='text'
                    placeholder='Enter Resident Name'
                    name='name'
                    value={name}
                    className='form-control'
                    onChange={(r) => setName(r.target.value)}
                >
                </input>
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Role:</label>
                <input
                    type='text'
                    placeholder='Enter Resident Role'
                    name='role'
                    value={role}
                    className='form-control'
                    onChange={(r) => setRole(r.target.value)}
                >
                </input>
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Gender:</label>
                <input
                    type='text'
                    placeholder='Enter Resident Gender'
                    name='gender'
                    value={gender}
                    className='form-control'
                    onChange={(r) => setGender(r.target.value)}
                >
                </input>
              </div>

              <button className='btn btn-danger' onClick={saveResident}>Submit</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResidentComponent