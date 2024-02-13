'use client'

import Card from '@/app/components/card';
import Btn from '@/app/components/modalButton';
import { useEffect, useState } from 'react';

export default function page() {
  const [data, setData] = useState([]);

  function handleDelete(taskToDelete) {
    const updatedData = data.filter( task => task !== taskToDelete);
    setData(updatedData);
    localStorage.setItem('myData', JSON.stringify(updatedData));
  }
  

  function handleCreate(taskToCreate) {
    const updatedData = [...data, taskToCreate];
    setData(updatedData);
    localStorage.setItem('myData', JSON.stringify(updatedData));
  }

  useEffect(() => {
    const strTasks = localStorage.getItem('myData');
    const allTasks = JSON.parse(strTasks);
    setData(allTasks);
  }, [])

  return (
    <main className="h-inherit m-5 w-full rounded-lg bg-white shadow-lg px-7 overflow-auto">
      <div className='mt-3 text-2xl text-teal-700 font-bold'>
        All Tasks
        <hr className='w-full border-2 border-amber-700 rounded-lg'/>
      </div>
      
      <div className='mt-5 grid grid-cols-1 md:grid-cols-3 gap-4'>
        { data &&
          data.map((task, i) => (
            <Card key={i} task={task} onDelete={handleDelete}/>
          ))
        }

        <Btn onCreate={handleCreate}/>
        
      </div>
    </main>
  )
}
