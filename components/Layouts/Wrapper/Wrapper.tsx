import React, { FC } from 'react'

export const Wrapper:FC = ({children}) => {
  return (
    <div className='w-full bg-gray-200 min-h-screen'>
        {children}
    </div>
  )
}
