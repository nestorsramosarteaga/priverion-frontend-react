import { useEffect, useState } from "react"
import axios from "axios";
import { useUiStore, useEmployeeStore } from "../../hooks";
import { Link } from "react-router-dom";
import backendApi from "../../api/backendApi";


export const EmployeesList = () => {
    
    const { openEmployeeModal } = useUiStore();
    const { activeEmployee, startDeletingEmployee, employees, setActiveEmployee } = useEmployeeStore();

    useEffect( () => {
        getEmployees()
    })
    
    const getEmployees = async () => {
        // const {data: allEmployees} = await axios.get(`${backendApi}/employees`)
        //setEmployees(allEmployees.data)
    }

    const handleDelete = () => {
        startDeletingEmployee();
        // try {
        //     // await axios.delete(`${backendApi}/employees/${id}`)
        //     getEmployees()
        // } catch (error) {
        //     console.log(error);
        // }      
    }

    return (
        <div className="d-flex flex-column justify-content-center">
          
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
                                onClick={ () => { setActiveEmployee(employee); openEmployeeModal() } }
                                className="btn btn-warning mx-1"
                                title="Edit"
                              >
                                <i className="fa-solid fa-pen"></i>
                              </Link>
                              <button 
                                onClick={ () => { setActiveEmployee(employee); handleDelete() }}
                                className="btn btn-danger mx-1"
                                title="Delete"
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
