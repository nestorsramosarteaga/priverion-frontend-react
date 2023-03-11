import { useDispatch, useSelector } from "react-redux";
import { onSetActiveEmployee } from "../store";


export const useEmployeeStore = () => {

    const dispatch = useDispatch();

    const {
        employees, activeEmployee
    } = useSelector( state => state.employee );

    const setActiveEmployee = ( employee ) => {
        dispatch( onSetActiveEmployee( employee ) )
    }


    return {
        //* Properties
        employees, 
        activeEmployee,
        //* Methods
        setActiveEmployee,
    }


}
