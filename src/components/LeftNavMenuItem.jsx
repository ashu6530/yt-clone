import React from 'react'
import { categories } from '../utils/constants'
import { IconBase } from 'react-icons'

function LeftNavMenuItem({text,icon,action,className}) {
  return (
    <div className={"text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] " + className}
    onClick={action}
    >

      <span className='text-xl mr-5' >{icon()}</span>
      {text}
    </div>
  )
}

export default LeftNavMenuItem