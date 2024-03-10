import React from 'react'

interface navigationProps {
    prevStep: () => void
    nextStep: () => void
    step1: boolean;

}

export default function Navigation({prevStep, nextStep, step1}:navigationProps) {
  return (
    <div className={`h-[72px] w-screen bg-white flex flex-end justify-between pl-[16px] pr-[16px] items-center `}>
       
            <p onClick={prevStep}>{`${!step1 ? 'Go back' : ''}`}</p>
          <form >
           <button onClick={nextStep} className="bg-dark-blue text-white w-[97px] h-[40px] rounded-lg font-ubuntu font-medium  text-[14px]">Next Step</button>
          </form>


    </div>
    )
}
