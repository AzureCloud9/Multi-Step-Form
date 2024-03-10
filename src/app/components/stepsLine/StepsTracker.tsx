import React from 'react'

interface step1props {
  step1: boolean
  step2: boolean

}

export default function StepsTracker({step1, step2}:step1props) {
  return (
    <div className='flex w-[100vw] justify-center mt-[-120px]'>
        <div className={` ${step1 ? 'bg-light-blue text-dark-blue border-dark-blue' : 'bg:none border-white'} rounded-full h-[33px] w-[33px] border border-dark-blue flex justify-center items-center mr-[16px]`}>
            <p className=' font-ubuntu font-bold text-[14px] text-dark-blue'>1</p>
        </div>

        <div className={` ${step2 ? 'bg-light-blue text-dark-blue border-dark-blue' : 'bg:none border-white '} rounded-full h-[33px] w-[33px] border border-white' flex justify-center items-center mr-[16px]`}>
            <p className=' font-ubuntu font-bold text-[14px] text-dark-blue'>2</p>
        </div>

        <div className={` ${step2 ? 'bg-light-blue text-dark-blue border-dark-blue' : 'bg:none border-white '} rounded-full h-[33px] w-[33px] border border-white' flex justify-center items-center mr-[16px]`}>
            <p className=' font-ubuntu font-bold text-[14px] text-dark-blue'>3</p>
        </div>

        <div className={` ${step2 ? 'bg-light-blue text-dark-blue border-dark-blue' : 'bg:none border-white '} rounded-full h-[33px] w-[33px] border border-white' flex justify-center items-center mr-[16px]`}>
            <p className=' font-ubuntu font-bold text-[14px] text-dark-blue'>4</p>
        </div>
    </div>
  )
}
