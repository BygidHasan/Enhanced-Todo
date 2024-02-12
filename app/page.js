import Card from '@/app/components/card';
import Btn from '@/app/components/modalButton';

export default function page() {

  return (
    <main className="h-inherit m-5 w-full rounded-lg bg-white shadow-lg px-7">
      <div className='mt-3 text-2xl text-teal-700 font-bold'>
        All Tasks
        <hr className='w-full border-2 border-amber-700 rounded-lg'/>
      </div>
      
      <div className='text-headtext mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden'>
        <div className='h- border-4 '>card</div>
        <div className='h- border-4 '>card</div>
        <div className='h- border-4 '>card</div>
        <div className='h- border-4 '>card</div>
        <div className='h- border-4 '>card</div>
        <div className='h- border-4 '>card</div>
        <div className='h- border-4 '>card</div>
        
        <Btn/>
        
      </div>
    </main>
  )
}
