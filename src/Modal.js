import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  const {isModalOpen,openModal,closeModal,questions}=useGlobalContext()
  return <h2>modal component</h2>
}

export default Modal
