import React, {useEffect, useState} from 'react'
import { listResidents } from '../services/ResidentService'
import { useNavigate } from 'react-router-dom'

const ListResidentComponent = () => {

    const [residents, setResidents] = useState([])

    const  navigator = useNavigate();

    useEffect(() => {
        listResidents().then((response) => {
            setResidents(response.data)
        }).catch(error => {
            console.error(error);
        })

    }, [])

    function addNewResident(){
        navigator('/add-resident')
    }

    function updateResident(id) {
        navigator(`/edit-resident/${id}`)
    }

  return (
    <div className='container'>
    <h2 className='text-center'>List Of Residents</h2>
    <button className='btn btn-danger mb-2' onClick={addNewResident}>Add Resident</button>
    <table className='table table-striped table bordered'>
        <thead className='text-center'>
            <tr> 
                <th>Resident ID</th>
                <th>Resident Name</th>
                <th>Resident Role</th>
                <th>Resident Gender</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody className='text-center'>
            {
                residents.map(resident => 
                    <tr key={resident.id}>
                        <td>{resident.id}</td>
                        <td>{resident.name}</td>
                        <td>{resident.role}</td>
                        <td>{resident.gender}</td>
                        <td>
                            <button className='btn btn-info' onClick={() => updateResident(resident.id)}>Update</button>
                        </td>
                    </tr>)
            }
        </tbody>
    </table>
    </div>
  )
}

export default ListResidentComponent