import { useEffect, useMemo, useState } from 'react';
import Swal from 'sweetalert2';
import '../../../node_modules/sweetalert2/dist/sweetalert2.min.css';

import Modal from 'react-modal';
import { useEmployeeStore, useUiStore } from '../../hooks';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const EmployeeModal = () => {

    const { isEmployeeModalOpen, closeEmployeeModal } = useUiStore();
    const { activeEmployee } = useEmployeeStore();

    const [ formSubmitted, setFormSubmitted ] = useState(false);

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const nameClass = useMemo( () => {
        if ( !formSubmitted ) return '';

        return ( formValues.name.length > 0 )
            ? ''
            : 'is-invalid';

    }, [ formValues.name, formSubmitted]);

    const emailClass = useMemo( () => {
        if ( !formSubmitted ) return '';

        return ( formValues.email.length > 0 )
            ? ''
            : 'is-invalid';
            
    }, [ formValues.email, formSubmitted]);

    const phoneClass = useMemo( () => {
        if ( !formSubmitted ) return '';

        return ( formValues.phone.length > 0 )
            ? ''
            : 'is-invalid';
            
    }, [ formValues.phone, formSubmitted]);

    const onInputchanged = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    useEffect(() => {
        setFormValues({ ...activeEmployee })      
    }, [activeEmployee])
    

    const onCloseModal = () => {
        closeEmployeeModal();
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        setFormSubmitted(true);

        if( formValues.name.length <= 0 ){
            Swal.fire('New Employee','The Name is required','error');
            return;
        };

        if( formValues.email.length <= 0 ){ 
            Swal.fire('New Employee','The Email is required','error');
            return;
        }

        if( formValues.phone.length <= 0 ){ 
            Swal.fire('New Employee','The Phone is required','error');
            return;
        }

        console.log( formValues);
    }


  return (
    <Modal
        isOpen={ isEmployeeModalOpen }
        onRequestClose={ ()=>closeEmployeeModal() }
        style={customStyles}
        className="modal"
        overlayClassName="modal-fondo"
        closeTimeoutMS={ 200 }
    >
        <h1> New Employee </h1>
        <hr />
        <form className="container" onSubmit={ onSubmit }>

            <div className="form-group mb-2">
                <label>Name</label>
                <input
                    type="text"
                    className={ `form-control ${ nameClass }` } 
                    placeholder="Name"
                    name="name"
                    value={ formValues.name }
                    onChange={ onInputchanged }
                />
            </div>

            <div className="form-group mb-2">
                <label>Email</label>
                <input
                    type="text"
                    className={ `form-control ${ emailClass }` }  
                    placeholder="Email" 
                    name="email"
                    value={ formValues.email }
                    onChange={ onInputchanged }
                />
            </div>

            <div className="form-group mb-2">
                <label>Phone</label>
                <input
                    type="text"
                    className={ `form-control ${ phoneClass }` }  
                    placeholder="Phone"
                    name="phone"
                    value={ formValues.phone }
                    onChange={ onInputchanged }
                />
            </div>

            <hr />

            <button
                type="submit"
                className="btn btn-outline-primary btn-block"
            >
                <i className="far fa-save"></i>
                <span> Save</span>
            </button>

        </form>
    </Modal>
  )
}
