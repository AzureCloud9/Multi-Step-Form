'use client'


import Image from "next/image";
import {FirstStep} from "../types";
import Titel from "../components/Titel";
import Description from "../components/Description";
import Navigation from "../components/Navigation";


interface FirstStepProps {
  step1Data: FirstStep;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  nameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  emailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  phoneNumberChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  prevStep1: () => void;
  nextStep1: () => void;
  step1: boolean;
}

let flevoland = {
  almere: { 
    name: "almere",
    population: 200000
  },
  lelystad: {
    name: "lelystad",
    population: 80000,
  },
  zeewolde: {
    name: "zeewolde",
    population: 20000,

  }
}



export default function Step1({step1Data, handleSubmit, nameChange, emailChange, phoneNumberChange, prevStep1, nextStep1, step1 }:FirstStepProps) {

 
 
  return (

    <div className="flex flex-col items-center">
    <div className="w-[343px] h-[376px] bg-white rounded-lg pl-[24px] pr-[24px] pt-[32px] font-ubuntu ">
      <div className="">
        <form onSubmit={handleSubmit}>
          <Titel titel={'Personal info'} />
          <Description descrption={'Please provide your name, email address, and phone number.'} />
          <label className="flex flex-col mb-[16px]">
             <h1 className=" text-[12px]">name</h1>
            <input
              className="h-[40px] pl-[10px] border-gray-400 border placeholder:pl-[10px]"
              type="text"
              name="name"
              value={step1Data.name}
              onChange={nameChange}
              placeholder="e.g Marley M"
            />
          </label>
          <label className="flex flex-col mb-[16px]">
             <h1 className=" text-[12px]">Email</h1>
            <input 
              className="h-[40px] pl-[10px] border-gray-400 border placeholder:pl-[10px]"
              type="email"
              name="email"
              value={step1Data.email}
              onChange={emailChange}
              placeholder="e.g marley@gmail.com"
            />
          </label>
          <label className="flex flex-col mb-[16px]">
             <h1 className=" text-[12px]">Phone Number</h1>
            <input
              className="h-[40px] pl-[10px] border-gray-400 border placeholder:pl-[10px]"
              type="text"
              name="number"
              value={step1Data.phoneNumber}
              onChange={phoneNumberChange}
              placeholder="e.g +31612345678"

            />
          </label>
        </form>
      </div>
    </div>
    <div className=" mt-[100px]">
      <Navigation prevStep={prevStep1} nextStep={nextStep1} step1={step1}/>
    </div>
    </div>
    
  )
}
