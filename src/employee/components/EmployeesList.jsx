import { useEffect, useState } from "react"
import axios from "axios";
import { useUiStore, useEmployeeStore } from "../../hooks";
import { Link } from "react-router-dom";
import backendApi from "../../api/backendApi";


export const EmployeesList = () => {
    
    const { openEmployeeModal } = useUiStore();
    const { activeEmployee, startDeletingEmployee, employees, setActiveEmployee, startLoadingEmployees } = useEmployeeStore();

    useEffect( () => {
      startLoadingEmployees()
    }, [])

    const handleOpenModal = (employee) => {
        setActiveEmployee(employee); 
        openEmployeeModal();
    }

    const handleDelete = (employee) => {
      setActiveEmployee(employee);
      startDeletingEmployee(employee);
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
                                onClick={ () => { handleOpenModal(employee) } }
                                className="btn btn-warning mx-1"
                                title="Edit"
                              >
                                <i className="fa-solid fa-pen"></i>
                              </Link>
                              <button 
                                onClick={ () => { handleDelete(employee) }}
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
