import React, { useState } from 'react'

const ResidentComponent = () => {

  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [gender, setGender] = useState('')


  function saveResident(r){
    r.preventDefault();

    const resident = {name, role, gender}
    console.log(resident)
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