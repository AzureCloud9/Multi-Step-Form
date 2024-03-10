'use client'

import Image from "next/image";
import StepsTracker from "./components/stepsLine/StepsTracker";
import Step1 from "./step1/page";
import { useState } from "react";
import { FirstStep, secondStep } from "./types";
import Link from "next/link";
import Step2 from "./step2/page";


export default function Home() {

  const [step1, setStep1] = useState<boolean>(true)
  const [step2, setStep2] = useState<boolean>(false)
  const [step3, setStep3] = useState<boolean>(false)
  const [step4, setStep4] = useState<boolean>(false)

  function nextStep1 () {
    setStep1(false)
    setStep2(true)
  }


  function nextStep2() {
    setStep2(false)
    setStep3(true)
  }

  function prevStep1() {
    setStep1(true)
    setStep2(false)
  }

  function nextStep3() {
    setStep3(false)
    setStep4(true)
  }

  function prevStep2() {
    setStep2(false)
    setStep1(true)
  }

  const [step1Data, setStep1Data] = useState<FirstStep>({
    name: "",
    email: "",
    phoneNumber: "",
  })

  const [step2Data, setStep2Data] = useState<secondStep>({
    subscriptionType: "", 
    subscriptionPlan: "monthly",
    ismonthlyBilling: true,
    secondPrice: 0
  })

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(step1Data)
  }

  function nameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setStep1Data({
      ...step1Data,
      name: e.target.value
    })
  }
  function emailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setStep1Data({
      ...step1Data,
      email: e.target.value
    })
  }
  function phoneNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    setStep1Data({
      ...step1Data,
      phoneNumber: e.target.value
    })
  }







  return (
    <div className="w-[100vw] flex flex-col justify-between ">
      <StepsTracker step1={step1} step2={step2} />
      <div className="flex flex-col justify-between h-[560px]">
        <div className="w-[100vw] flex justify-center  mt-[34px]">
          {step1 ? (
              <Step1  prevStep1={prevStep1} nextStep1={nextStep1} step1Data={step1Data} handleSubmit={handleSubmit} nameChange={nameChange} emailChange={emailChange} phoneNumberChange={phoneNumberChange} step1={step1} />
          ): step2 ? (
              <Step2  prevStep2={prevStep1} nextStep2={nextStep2}/>
          ):null}
        </div>  

        
      </div>
      
    </div>
  );
}
