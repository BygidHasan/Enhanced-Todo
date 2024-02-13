'use client';

import { useState } from "react";
import { MdOutlineEditNote, MdOutlineDeleteOutline } from "react-icons/md";

export default function card({task, onDelete}) {
    const { task: singleTask, description, priority, status } = task;
    let priColor='';

    if(priority == 'low') {
        priColor = 'bg-orange-300'
    } else if(priority == 'medium') {
        priColor = 'bg-orange-500'
    } else {
        priColor = 'bg-red-500'
    }

    function handleDelete() {
        onDelete(task);
    }

    return (
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
                    <button className="rounded-lg bg-teal-600 text-white p-1 mx-1"><MdOutlineEditNote size='24' /></button>
                    <button className="rounded-lg bg-red-700 text-white p-1" onClick={handleDelete}><MdOutlineDeleteOutline size='24' /></button>
                </div>
            </div>
        </div>
    )
}
