import React, {useEffect, useState} from 'react'
import { listResidents } from '../services/ResidentService'

const ListResidentComponent = () => {

    const [residents, setResidents] = useState([])

    useEffect(() => {
        listResidents().then((response) => {
            setResidents(response.data)
        }).catch(error => {
            console.error(error);
        })

    }, [])

  return (
    <div className='container'>
    <h2 className='text-center'>List Of Residents</h2>
    <table className='table table-striped table bordered'>
        <thead>
            <tr>
                <th>Resident ID</th>
                <th>Resident Name</th>
                <th>Resident Role</th>
                <th>Resident Gender</th>
            </tr>
        </thead>
        <tbody>
            {
                residents.map(resident => 
                    <tr key={resident.id}>
                        <td>{resident.id}</td>
                        <td>{resident.name}</td>
                        <td>{resident.role}</td>
                        <td>{resident.gender}</td>
                    </tr>)
            }
        </tbody>
    </table>
    </div>
  )
}

export default ListResidentComponent