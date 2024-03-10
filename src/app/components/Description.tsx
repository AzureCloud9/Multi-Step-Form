import React from 'react'

interface descriptionProps {
    descrption: string
}

export default function Description({descrption}:descriptionProps) {
  return (
        <> 
            <p className=" font-ubuntu text-[16px] leading-[25px] mb-[22px]">{descrption}</p>
        </>
    )
}
