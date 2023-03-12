import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { backendApi } from "../api";
import { onAddEmployee, onDeleteEmployee, onLoadEmployees, onSetActiveEmployee, onUpdateEmployee } from "../store";


export const useEmployeeStore = () => {

    const dispatch = useDispatch();

    const { employees, activeEmployee } = useSelector( state => state.employee );

    const setActiveEmployee = ( employee ) => {
        dispatch( onSetActiveEmployee( employee ) )
    }

    const startSavingEvent = async( employee ) => {
        //* Everything OK    
        if ( employee?.id ){
            // Update
            backendApi.put(`/employees/${employee.id}`, employee)
            .catch(function (error) {
                //console.log(error.toJSON());
                Swal.fire('Error Updating data', error.toJSON()?.message ,'error');
                return;
            });
            
            dispatch( onUpdateEmployee({...employee}) );
            return;
        }
        // Creando
        const { data : { data } } = await backendApi.post('/employees', employee).catch(function (error) {
            //console.log(error.toJSON());
            Swal.fire('Error Saving data', error.toJSON()?.message ,'error');
            return;
        });
        dispatch( onAddEmployee({ ...employee, id: data.id }) );                 
    }

    const startDeletingEmployee = (employee) => {
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: 'No',
            customClass: {
              actions: 'my-actions',
              cancelButton: 'order-1 right-gap',
              confirmButton: 'order-2',
              denyButton: 'order-3',
            }
        }).then(async (result) => {
            if (result.isConfirmed) {
                await backendApi.delete(`/employees/${employee.id}`)
                .catch(function (error) {
                    console.log(error.toJSON());
                    Swal.fire('Error Deleting Employee', error.toJSON()?.message ,'error');
                });
                dispatch( onDeleteEmployee() );            
            } else if (result.isDenied) {
                return;
            }
        })
    }


    const startLoadingEmployees = async () => {
        try {            
            const {data:{data}} = await backendApi.get('/employees');
            dispatch( onLoadEmployees( data ) );
        } catch (error) {
            console.log('Error Loading Employees');
            console.log(error);
        }
    }

    return {
        //* Properties
        employees, 
        activeEmployee,
        //* Methods
        setActiveEmployee,
        startDeletingEmployee,
        startSavingEvent,
        startLoadingEmployees,
    }


}
