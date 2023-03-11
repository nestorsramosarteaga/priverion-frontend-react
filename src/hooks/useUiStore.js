import { useDispatch, useSelector } from "react-redux"
import { onCloseEmployeeModal, onOpenEmployeeModal } from "../store";


export const useUiStore = () => {

    const dispatch = useDispatch();

    const {
        isEmployeeModalOpen
    } = useSelector( state => state.ui );


    const openEmployeeModal = () => {
        dispatch( onOpenEmployeeModal() )
    }

    const closeEmployeeModal = () => {
        dispatch( onCloseEmployeeModal() )
    }


    return {
        //* Properties
        isEmployeeModalOpen,
        //* Methods
        openEmployeeModal,
        closeEmployeeModal,
    }


}