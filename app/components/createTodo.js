'use client'

import { useState} from "react";
import { PiPlusCircleThin, PiXBold } from "react-icons/pi";

import { addTask } from "@/store/crudSlice";
import { useDispatch } from 'react-redux';

export default function page() {
    const [isClicked, setIsClicked] = useState(false);
    const [data, setData] = useState({ task: '', description: '', priority: 'Low', status: 'Complete' })
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(addTask(data));        
        setData({ task: '', description: '', priority: 'Low', status: 'Complete' });
        setIsClicked(false);
    }

    const isButtonDisabled = data.task.trim() === '' || data.description.trim() === '';

    return (
        <>
        <div className={`${isClicked ? 'block' : 'hidden'} fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50`}>
            <div className='my-auto w-72 h-72 shadow-lg flex justify-center items-center'>
                <div className="relative w-72 h-72 rounded-lg bg-white shadow-lg px-3">
                    <button onClick={() => setIsClicked(false)} className="absolute -top-3 -right-3 border-2 border-red-700 bg-red-700 rounded-full text-white p-1.5">
                        <PiXBold/>
                    </button>
                    <div className="mt-7">
                        <input 
                            placeholder="enter task here"
                            className="w-full mb-2 rounded-lg pl-2 py-1 border border-amber-700 bg-transparent text-slate-900"
                            type="text"
                            value={data.task}
                            onChange={(e) => setData((prevData) => ({...prevData, task: e.target.value}))} />
                        <textarea
                            placeholder="enter description here"
                            className="w-full rounded-lg pl-2 py-1 border border-amber-700 bg-transparent text-slate-900 resize-none"
                            type="text"
                            value={data.description}
                            onChange={(e) => setData((prevData) => ({...prevData, description: e.target.value}))}></textarea>
                    </div>
                    
                    <div className="flex justify-between items-center my-2">
                        <div className="w-1/2 border border-amber-700 rounded-lg p-2">
                            <label htmlFor="priorities" className="font-bold">Priorities</label>
                            <select
                                id="priorities"
                                className="rounded-lg px-3 py-1 cursor-pointer bg-transparent border border-amber-700"
                                value={data.priority}
                                onChange={(e) => setData((prevData) => ({...prevData, priority: e.target.value}))}>
                                    <option className="bg-transparent text-yellow-400 font-sans" value="Low">Low</option>
                                    <option className="bg-transparent text-orange-600 font-sans" value="Medium">Medium</option>
                                    <option className="bg-transparent text-red-600 font-sans" value="High">High</option>
                            </select>
                        </div>
                        <div className="w-1/2 ml-2 border border-amber-700 rounded-lg p-2">
                        <label htmlFor="status" className="font-bold">Status</label>
                            <select
                                id="status"
                                className="rounded-lg px-2 py-1 cursor-pointer bg-transparent border border-amber-700"
                                value={data.status}
                                onChange={(e) => setData((prevData) => ({...prevData, status: e.target.value}))}>
                                    <option className="bg-transparent text-teal-400 font-sans" value="Complete">Complete</option>
                                    <option className="bg-transparent text-red-700 font-sans" value="Incomplete">Incomplete</option>
                            </select>
                        </div>
                    </div>
                    <button
                        onClick={handleClick}
                        disabled={isButtonDisabled}
                        className={` ${isButtonDisabled ? 'hover:bg-red-600 hover:border-red-600 hover:text-white' : 'hover:border-teal-700 hover:bg-teal-700 hover:text-white'} text-center border-2 border-amber-700 text-bold py-1 rounded-lg mt-6 px-3 `}>
                            Create Task
                        </button>
                </div>
            </div>
        </div>
        <button onClick={() => setIsClicked(true)} className='border-2 border-amber-700 rounded-lg border-dashed h-40 flex items-center justify-center text-teal-700'>
            <PiPlusCircleThin className='size-10'/>
            <span className='text-lg'>Create Task</span>
        </button>
        </>
    )
}
