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
        priColor = 'bg-red-700'
    }


    return (
        <>
        <div className={`border-4 ${status == 'Complete' ? 'border-teal-600' : 'border-red-700'} rounded-lg h-auto shadow-xl relative text-wrap px-4 py-6 mb-2`}>
            <div className="overflow-auto">
            <p className="w-full text-teal-700 text-xl font-bold mb-2">{singleTask}</p>
            <p className="w-full text-slate-500 text-sm font-semibold mb-4">{description}</p>
            </div>

            <div className="flex mt-5">
                <div className="flex flex-col w-full md:w-auto md:flex-row text-center">
                    <p className={`${priColor} text-white px-3 py-1 rounded-lg md:mr-2 mb-2 md:mb-0`}>{priority}</p>
                    <p className={` ${status == 'Complete' ? 'bg-teal-600' : 'bg-red-700'} text-white px-3 py-1 rounded-lg`}>{status}</p>
                </div>
                <div className="flex absolute -top-4 right-1 z-auto">
                    <EditTodo id={id}/>
                    <button className="rounded-lg bg-red-700 text-white p-1" onClick={() => dispatch(deleteTask(id))}><MdOutlineDeleteOutline size='24' /></button>
                </div>
            </div>
        </div>
        </>
    )
}
