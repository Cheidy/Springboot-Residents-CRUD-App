import React, { useEffect, useState } from 'react'
import { createResident, getResident } from '../services/ResidentService'
import {useNavigate, useParams} from 'react-router-dom';

const ResidentComponent = () => {

  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [gender, setGender] = useState('')

  const {id} = useParams();

  const [errors, setErrors] = useState({
    name: '',
    role: '',
    gender: ''
  })

  const navigator = useNavigate();

  useEffect(() => {

      if(id){
        getResident(id).then((response) => {
          setName(response.data.name);
          setRole(response.data.role);
          setGender(response.data.gender);
        }).catch(error => {
          console.error(error)
        })
      }

  }, [id])

  function saveResident(r){
    r.preventDefault();

    if(validateForm()){
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
      valid = false;
    }

    if(gender.trim()){
      errorsCopy.gender = '';
    } else {
      errorsCopy.gender = "Gender is required";
      valid = false;
    }

    setErrors(errorsCopy);

    return valid;
  }

  function pageTitle() {
      if(id) {
        return <h2 className='text-center'>Update Resident</h2>
      }else {
        return <h2 className='text-center'>Add Resident</h2>
      }
  }
  return (
    <div className='container'>
      <br/> <br/>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          {
            pageTitle()
          }
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>Name:</label>
                <input
                    type='text'
                    placeholder='Enter Resident Name'
                    name='name'
                    value={name}
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    onChange={(r) => setName(r.target.value)}
                >
                </input>
                {errors.name && <div className='invalid-feedback'> {errors.name} </div>}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Role:</label>
                <input
                    type='text'
                    placeholder='Enter Resident Role'
                    name='role'
                    value={role}
                    className={`form-control ${errors.role ? 'is-invalid' : ''}`}
                    onChange={(r) => setRole(r.target.value)}
                >
                </input>
                {errors.role && <div className='invalid-feedback'> {errors.role} </div>}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Gender:</label>
                <input
                    type='text'
                    placeholder='Enter Resident Gender'
                    name='gender'
                    value={gender}
                    className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
                    onChange={(r) => setGender(r.target.value)}
                >
                </input>
                {errors.gender && <div className='invalid-feedback'> {errors.gender} </div>}
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