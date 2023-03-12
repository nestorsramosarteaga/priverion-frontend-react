import { useEmployeeStore, useUiStore } from "../../hooks"


export const FabAddNew = () => {

    const { openEmployeeModal } = useUiStore();
    const { setActiveEmployee } = useEmployeeStore();

    const handleClickNew = () => {

        setActiveEmployee({
          name: '',
          email: '',
          phone: ''
        });

        openEmployeeModal();
    }

    return (
        <button
            className="btn btn-primary fab"
            onClick={ handleClickNew }
        >
            <i className="fa fa-plus"></i>
        </button>
    )
}
