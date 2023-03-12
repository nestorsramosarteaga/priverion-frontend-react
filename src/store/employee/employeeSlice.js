import { createSlice } from '@reduxjs/toolkit';

const tempEmployees =  [{
    "id": 27,
    "name": "Nata Guerrero",
    "email": "maria.arteaga@gmail.com",
    "phone": "+573225001010"
}, {
   "id": 28,
"name": "Néstor Ramos Arteaga",
"email": "nestor.ramos@gmail.com",
"phone": "+573126701433"
}];

export const employeeSlice = createSlice({
   name: 'employee',
   initialState: {
      employees: tempEmployees,
      activeEmployee: null
   },
   reducers: {
      onSetActiveEmployee: (state, { payload } ) => {
         state.activeEmployee = payload;
      },
      onAddEmployee: ( state, { payload } ) => {
         state.employees.push( payload );
         state.activeEmployee = null;
      },
      onUpdateEmployee: ( state, { payload } ) => {
         state.employees = state.employees.map( employee => {
            console.log({employee, payload})
            if ( employee.id === payload.id ) {
               return payload;
            }

            return employee;

         })
      },
      // onDeleteEmployee: ( ) => {

      // },
   }
});


export const { onSetActiveEmployee, onAddEmployee, onUpdateEmployee } = employeeSlice.actions;