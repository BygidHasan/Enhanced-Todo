'use client';

import { MdOutlineDeleteOutline } from "react-icons/md";

import { deleteTask } from '@/store/crudSlice';
import { useDispatch } from 'react-redux';
import EditTodo from "./editTodo";

export default function card({task}) {

    const dispatch = useDispatch();
    const { id, task: singleTask, description, priority, status } = task;

    let priColor='';

    if(priority == 'Low') {
        priColor = 'bg-orange-300'
    } else if(priority == 'Medium') {
        priColor = 'bg-orange-600'
    } else {
        priColor = 'bg-red-500'
    }


    return (
        <>
        <div className={`border-4 ${status == 'Complete' ? 'border-teal-500' : 'border-red-500'} rounded-lg h-40 text-slate-900 flex flex-col justify-around shadow-xl`}>
            <div className="mx-5">
                <h1 className="w-full text-teal-700 text-xl font-bold">{singleTask}</h1>
                <p className="w-full text-slate-900 overflow-auto scroll-auto">{description}</p>
            </div>
            <div className="flex justify-between mx-5 items-center">
                <div className="flex">
                    <p className={`${priColor} text-white px-3 py-1 rounded-lg mr-1`}>{priority}</p>
                    <p className={` ${status == 'Complete' ? 'bg-teal-500' : 'bg-red-500'} text-white px-3 py-1 rounded-lg`}>{status}</p>
                </div>
                <div className="flex">
                    <EditTodo id={id}/>
                    <button className="rounded-lg bg-red-700 text-white p-1" onClick={() => dispatch(deleteTask(id))}><MdOutlineDeleteOutline size='24' /></button>
                </div>
            </div>
        </div>
        </>
    )
}
