import React from 'react'

interface titelProps {
    titel: string
}

export default function Titel({titel}:titelProps) {
  return (
    <>
        <h1 className=" font-bold text-[24px]">{titel}</h1>
    </>
)
}
