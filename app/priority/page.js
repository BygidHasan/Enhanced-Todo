'use client';
import React from 'react'
import { useSelector } from 'react-redux';
import Card from '@/app/components/card';
export default function page() {
  const allTasks = useSelector(state => state.allTasks.tasks);
  const priorityOrder = {High:1, Medium:2, Low:3};
  const sortedTask = [...allTasks].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority])
  console.log(sortedTask);

  return (
    <div className="h-inherit m-5 w-full rounded-lg bg-white shadow-lg px-7 overflow-auto">
      <div className='mt-3 text-2xl text-teal-700 font-bold'>
        Sort by priority
        <hr className='w-full border-2 border-amber-700 rounded-lg'/>
      </div>
      
      <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
          sortedTask &&
          sortedTask.map(task => {
              return <Card key={task.id} task={task} />
          })
        }
      </div>
    </div>
  )
}
