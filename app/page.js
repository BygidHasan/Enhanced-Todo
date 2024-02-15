'use client'

import Card from '@/app/components/card';
import CreateTodo from '@/app/components/createTodo';
import { useSelector } from "react-redux";

export default function page() {
  let allTasks = useSelector( state => state.allTasks.tasks );

  return (
    <main className="h-inherit m-5 w-full rounded-lg bg-white shadow-lg px-7 overflow-auto">
      <div className='mt-3 text-2xl text-teal-700 font-bold'>
        All Tasks
        <hr className='w-full border-2 border-amber-700 rounded-lg'/>
      </div>
      
      <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        { allTasks &&
          allTasks.map((task) => (
            <Card key={task.id} task={task}/>
          ))
        }
        <CreateTodo />
      </div>
    </main>
  )
}
