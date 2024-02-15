'use client';
import React from 'react'
import { useSelector } from 'react-redux';
import Card from '@/app/components/card';
export default function page() {
  const allTasks = useSelector(state => state.allTasks.tasks);

  return (
    <div className="h-inherit m-5 w-full rounded-lg bg-white shadow-lg px-7 overflow-auto">
      <div className='mt-3 text-2xl text-teal-700 font-bold'>
        Completed Tasks
        <hr className='w-full border-2 border-amber-700 rounded-lg'/>
      </div>
      
      <div className='mt-5 grid grid-cols-1 md:grid-cols-3 gap-4'>
      {
          allTasks &&
          allTasks.map(task => {
            if( task.status === 'Complete') {
              return <Card key={task.id} task={task} />
            }
          })
        }
      </div>
    </div>
  )
}
