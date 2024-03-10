import React from 'react'
import Titel from '../components/Titel'
import Description from '../components/Description'
import Navigation from '../components/Navigation'

interface step2Props {
  prevStep2: () => void
  nextStep2: () => void
  step1: boolean
}

export default function Step2({prevStep2, nextStep2, step1}:step2Props) {
  return (
<div className="flex flex-col items-center">
    <div className="w-[343px] h-[376px] bg-white rounded-lg pl-[24px] pr-[24px] pt-[32px] font-ubuntu ">
      <div className="">
       
          <Titel titel={'Select your plan'} />
          <Description descrption={'You have the option of monthly or yearly billing.'} />
          
      </div>
      </div>
      <div className=" mt-[100px]">
      <Navigation prevStep={prevStep2} nextStep={nextStep2} step1={step1}/>
    </div>   
</div>
  )
}
