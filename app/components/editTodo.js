'use client';

import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editTask } from '@/store/crudSlice';
import { PiXBold } from "react-icons/pi";
import { MdOutlineEditNote } from "react-icons/md";


export default function editTodo({id}) {
    const allTasks = useSelector(state => state.allTasks.tasks);
    const findData = (allTasks.find(task => task.id === id))

    const [updateData, setUpdateData] = useState({...findData});
    console.log(updateData);
    const dispatch = useDispatch();
    const [isClicked, setIsClicked] = useState(false);
    
    function handleClick() {
        dispatch(editTask(updateData));
        setIsClicked(false);
    }

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
                            value={updateData.task}
                            onChange={(e) => setUpdateData((prevData) => ({...prevData, task: e.target.value}))}
                        />
                        <textarea
                            placeholder="enter description here"
                            className="w-full rounded-lg pl-2 py-1 border border-amber-700 bg-transparent text-slate-900 resize-none"
                            type="text"
                            value={updateData.description}
                            onChange={(e) => setUpdateData((prevData) => ({...prevData, description: e.target.value}))}></textarea>
                    </div>
                    
                    <div className="flex justify-between items-center my-2">
                        <div className="w-1/2 border border-amber-700 rounded-lg p-2">
                            <label htmlFor="priorities" className="font-bold">Priorities</label>
                            <select
                                id="priorities"
                                className="rounded-lg px-3 py-1 cursor-pointer bg-transparent border border-amber-700"
                                value={updateData.priority}
                                onChange={(e) => setUpdateData((prevData) => ({...prevData, priority: e.target.value}))}>
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
                                value={updateData.status}
                                onChange={(e) => setUpdateData((prevData) => ({...prevData, status: e.target.value}))}>
                                    <option className="bg-transparent text-teal-400 font-sans" value="Complete">Complete</option>
                                    <option className="bg-transparent text-red-700 font-sans" value="Incomplete">Incomplete</option>
                            </select>
                        </div>
                    </div>
                    <button onClick={handleClick} className="text-center border-2 border-amber-700 text-bold py-1 rounded-lg mt-6 px-3 hover:border-teal-700 hover:bg-teal-700 hover:text-white">Edit Task</button>
                </div>
            </div>
        </div>
        <button onClick={() =>setIsClicked(true)} className="rounded-lg bg-teal-600 text-white p-1 mx-1" ><MdOutlineEditNote size='24' /></button>
        </>
    )
}
