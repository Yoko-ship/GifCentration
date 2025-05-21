'use client'

import React from 'react'
import { Provider } from 'react-redux'
import { makeStore } from '@/story/story'
import Header from './Header'
import Modal from './Modal'

const store = makeStore()
function StartModal() {
  return (
    <Provider store={store}>
        <Header/>
        <Modal/>
    </Provider>
  )
}

export default StartModal