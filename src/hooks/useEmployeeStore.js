import { useDispatch, useSelector } from "react-redux";
import { onAddEmployee, onSetActiveEmployee, onUpdateEmployee } from "../store";


export const useEmployeeStore = () => {

    const dispatch = useDispatch();

    const {
        employees, activeEmployee
    } = useSelector( state => state.employee );

    const setActiveEmployee = ( employee ) => {
        dispatch( onSetActiveEmployee( employee ) )
    }

    const startSavingEvent = async( employee ) => {
        //* TODO: go to the backend
        console.log( {employee} );
        //* Everything OK
        if ( employee?.id ){
            // Update
            dispatch( onUpdateEmployee({...employee}) )
        } else {
            // Creando
            dispatch( onAddEmployee({ ...employee, id: new Date().getTime() }) )

        }

    }

    return {
        //* Properties
        employees, 
        activeEmployee,
        //* Methods
        setActiveEmployee,
        startSavingEvent,
    }


}
