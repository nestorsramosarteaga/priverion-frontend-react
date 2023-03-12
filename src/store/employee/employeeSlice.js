import { createSlice } from '@reduxjs/toolkit';

export const employeeSlice = createSlice({
   name: 'employee',
   initialState: {
      isLoadingEmployees: true,
      employees: [],
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
            if ( employee.id === payload.id ) {
               return payload;
            }
            return employee;
         })
      },
      onDeleteEmployee: ( state ) => {
         state.employees = state.employees.filter( employee => employee.id !== state.activeEmployee.id );
         state.activeEmployee = null;
      },
      onLoadEmployees: ( state, { payload = [] } ) => {
         state.isLoadingEmployees = false;
         // state.employees = payload;
         payload.forEach( employee => {
            const exists = state.employees.some( dbEmploy => dbEmploy.id === employee.id )
            if ( ! exists ) {
               state.employees.push( employee )
            }
         })
      }
   }
});


export const { onSetActiveEmployee, onAddEmployee, onUpdateEmployee, onDeleteEmployee, onLoadEmployees } = employeeSlice.actions;