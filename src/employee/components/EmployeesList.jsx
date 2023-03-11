import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const endpoint = "http://api.test/api/v1";

export const EmployeesList = () => {
    

    const [employees, setEmployees] = useState([])

    useEffect( () => {
      getEmployees()
    })
    
    const getEmployees = async () => {
        //const {data: allEmployees} = await axios.get(`${endpoint}/employees`)
        //setEmployees(allEmployees.data)
    }

    const onDeleteEmployee = async (id) => {
        await axios.delete(`${endpoint}/employees/${id}`)
        getEmployees()
    }

    return (
        <div className="d-flex flex-column justify-content-center">
          
          <div className="px-3">
            <button className="btn btn-primary">Create Employee</button>
          </div> 

          <div className="w-75 p-3"> 

            <table className="table">  
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map( (employee) =>(
                          <tr key={employee.id}>
                            <td> {employee.name} </td>
                            <td> {employee.email} </td>
                            <td> {employee.phone} </td>
                            <td>
                              <Link 
                                to={`/edit/${employee.id}`}
                                className="btn btn-warning"
                              >
                                <i className="fa-solid fa-pen"></i>
                              </Link>
                              <button 
                                onClick={ ()=>onDeleteEmployee(employee.id) }
                                className="btn btn-danger"
                              >
                                <i className="fa-solid fa-trash-can"></i>
                                </button>
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
