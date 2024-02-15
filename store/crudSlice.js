'use client';

import { createSlice, current, nanoid } from "@reduxjs/toolkit";

export const crudSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: JSON.parse(localStorage.getItem('myData')) ? JSON.parse(localStorage.getItem('myData')) : []
    },
    reducers: {
        addTask: (state, action) => {
            const id = nanoid();
            const singleData= { id, ...action.payload }
            state.tasks.push(singleData);
            localStorage.setItem('myData', JSON.stringify(current(state.tasks)));
        },

        editTask: (state, action) => {
            const editedData = action.payload;
            state.tasks = state.tasks.map(item => {
                if(item.id === editedData.id) {
                    return {...item, ...editedData}
                }
                return item;
            })
            localStorage.setItem('myData', JSON.stringify(state.tasks));
        },

        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
            localStorage.setItem('myData', JSON.stringify(state.tasks));
        }
    }
})

export const { addTask, editTask, deleteTask } = crudSlice.actions;
export default crudSlice.reducer;