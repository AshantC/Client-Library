import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className='max-w-7xl mx-auto '>
        <div className='flex items-center justify-between py-2'>
          <Link href={'/'}>
            <div>Home</div>
          </Link>
          <div className='flex gap-4'>
            <button className='h-10 rounded-md border border-blue-400 px-4 py-2 text-sm font-medium transition-all hover:border-blue-100 hover:bg-blue-100'>
              Sign in
            </button>
            <button className='h-10 rounded-md border bg-blue-200 border-blue-200 px-4 py-2 text-sm font-medium transition-all hover:border-blue-100 hover:bg-blue-100'>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
