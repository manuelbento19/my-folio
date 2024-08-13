import React from 'react'

export default function Page() {
  return (
    <main className='w-full h-screen bg-gray-50 overflow-auto flex p-1'>
      <section id='device' className='w-full max-w-xs m-auto h-full md:h-[600px] border-gray-800 border-[14px] rounded-[2.5rem] bg-gray-200 relative'>
        <div class="h-5 md:h-11 w-1 bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"/>
        <div class="h-5 md:h-11 w-1 bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"/>
        <div class="h-5 md:h-12 w-1 bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"/>
        <div className="rounded-[2.5rem] overflow-auto size-full">

        </div>
      </section>
    </main>
  )
}
