import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'
function App() {
  const {waiting,loading,question,index}= useGlobalContext()
  if(waiting){
    return <SetupForm />
  }
  if (loading) {
    return <Loading />;
  }
  return <h2>quiz starter</h2>
}

export default App
