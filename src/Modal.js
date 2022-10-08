import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  const { isModalOpen, openModal, closeModal, questions, correct } =
    useGlobalContext();
  return (
    <div className={`modal-container ${isModalOpen ? "isOpen" : ""}`}>
      <div className="modal-content">
        <h2>congrats!</h2>
        <p>
          you answered of {(correct / questions.length) * 100}% questions
          correctly
        </p>
        <button className="close-btn" onClick={closeModal}>Play again</button>
      </div>
    </div>
  ); 
}

export default Modal
