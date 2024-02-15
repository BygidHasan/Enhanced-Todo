import Link from 'next/link';
import { PiHouseFill, PiSortDescendingBold, PiCheckSquareOffsetFill, PiFileXFill  } from "react-icons/pi";

export default function navbar() {

    return (
        <nav className='w-16 lg:w-64 h-inherit shadow-lg bg-white my-5 ml-5 px-2 lg:px-0 rounded-lg flex flex-col justify-between text-teal-700'>
            <div className='text-center text-2xl mx-auto mt-3 w-full font-bold'>
                <span className='lg:hidden'>ETD</span><span className='hidden lg:block'>EnToDo</span>
                <hr className='w-full lg:w-5/6 lg:mx-auto border-2 rounded-lg border-amber-700'/>
            </div>

            <div className="flex flex-col mx-auto">
                <Link href="/" className="flex items-center hover:border-b-2 hover:border-b-amber-700 mb-3 ">
                    <PiHouseFill className="mr-2 size-8" /><span className='hidden lg:block text-slate-900 font-bold'>All Tasks</span>
                </Link>
                <Link href="/priority" className="flex items-center hover:border-b-2 hover:border-b-amber-700 mb-3 ">
                    <PiSortDescendingBold className="mr-2 size-8" /><span className='hidden lg:block text-slate-900 font-bold'>Priority Sort</span>
                </Link>
                <Link href="/completed" className="flex items-center hover:border-b-2 hover:border-b-amber-700 mb-3 ">
                    <PiCheckSquareOffsetFill className="mr-2 size-8" /><span className='hidden lg:block text-slate-900 font-bold'>Competed</span>
                </Link>
                <Link href="/incomplete" className="flex items-center hover:border-b-2 hover:border-b-amber-700 ">
                    <PiFileXFill className="mr-2 size-8" /><span className='hidden lg:block text-slate-900 font-bold'>Incomplete</span>
                </Link>
            </div>
            <div className="text-center mb-2"><span className='hidden lg:inline-block'>powered by  </span><i className='text-xs lg:text-sm text-slate-900 font-bold'>@bygid</i></div>
        </nav>
    )
}
