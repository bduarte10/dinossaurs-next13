"use client"
import React, { useState } from 'react'


export interface DinoType {
  dinossaurs: [
    {
    Name: string
    Description: string
  }
]
}

const DinoList = (dinossaurs: DinoType) => {
  const [searchQuery, setSearchQuery] = useState('');
 
  const d = dinossaurs.dinossaurs
  const filteredDinossaurs = d.filter(
    (dino) => dino.Name.toLowerCase().includes(searchQuery.toLowerCase())
  )


  return (
    <>
      <input
    className='text-black p-2'
    type="text"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    placeholder="Digite o nome do dinossauro"
  />
    <ul className="grid grid-cols-2 gap-4 pt-4">
    {filteredDinossaurs.map((d: any) => (
      <div key={d.Name} className="">
        <div className="flex flex-col items-center justify-center border-2 border-white p-4 m-2 hover:text-black hover:bg-gray-200 rounded-lg cursor-pointer ">
          <li>{d.Name}</li>
          <li>{d.Description}</li>
        </div>
      </div>
    )
    )}
    
  </ul>
    </>
  )
}

export default DinoList