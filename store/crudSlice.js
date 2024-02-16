'use client';

import { createSlice, current, nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const crudSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: []
    },
    reducers: {
        initialize: (state, action) => {
            return { ...state, tasks: action.payload };
        },
        addTask: (state, action) => {
            const id = nanoid();
            const singleData= { id, ...action.payload }
            state.tasks.push(singleData);
            if( typeof window !== 'undefined' ) {
                localStorage.setItem('myData', JSON.stringify(current(state.tasks)));
            }
        },

        editTask: (state, action) => {
            const editedData = action.payload;
            state.tasks = state.tasks.map(item => {
                if(item.id === editedData.id) {
                    return {...item, ...editedData}
                }
                return item;
            })
            if( typeof window !== 'undefined' ) {
                localStorage.setItem('myData', JSON.stringify(state.tasks));
            }
        },

        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
            if( typeof window !== 'undefined' ) {
                localStorage.setItem('myData', JSON.stringify(state.tasks));
            }
        }
    }
})

export const initializeClient = () => {
    const dispatch = useDispatch();

    useEffect(() => {
    if (typeof window !== "undefined") {
        const storeData = localStorage.getItem("myData");
        const initialData = storeData ? JSON.parse(storeData) : [];

      // Dispatch the action to initialize the Redux store
        dispatch(crudSlice.actions.initialize(initialData));
    }
    }, [dispatch]);
};

export const { addTask, editTask, deleteTask } = crudSlice.actions;
export default crudSlice.reducer;