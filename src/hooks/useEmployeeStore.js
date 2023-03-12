import { useDispatch, useSelector } from "react-redux";
import { backendApi } from "../api";
import { onAddEmployee, onDeleteEmployee, onSetActiveEmployee, onUpdateEmployee } from "../store";


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

    return {
        //* Properties
        employees, 
        activeEmployee,
        //* Methods
        setActiveEmployee,
        startDeletingEmployee,
        startSavingEvent,
    }


}
