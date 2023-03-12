import { useDispatch, useSelector } from "react-redux";
import { backendApi } from "../api";
import { onAddEmployee, onDeleteEmployee, onLoadEmployees, onSetActiveEmployee, onUpdateEmployee } from "../store";


export const useEmployeeStore = () => {

    const dispatch = useDispatch();

    const {
        employees, activeEmployee
    } = useSelector( state => state.employee );

    const setActiveEmployee = ( employee ) => {
        dispatch( onSetActiveEmployee( employee ) )
    }

    const startSavingEvent = async( employee ) => {
        //* TODO: Update employee


        //* Everything OK
        if ( employee?.id ){
            // Update
            dispatch( onUpdateEmployee({...employee}) );
        } else {
            // Creando
            const { data : { data } } = await backendApi.post('/employees', employee);
            dispatch( onAddEmployee({ ...employee, id: data.id }) );
        }
    }

    const startDeletingEmployee = () => {
        //* TODO: go to the backend

        dispatch( onDeleteEmployee() );
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
