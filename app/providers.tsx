'use client'

import React from 'react'
import { makeStore } from '@/story/story'
import { Provider } from 'react-redux'
const store = makeStore()

const Providers:React.FC<{children:React.ReactNode}> = ({children})=>{
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default Providers