import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

const url = ''
const tempUrl =
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [waiting,SetWaiting]=useState(true)
  const [loading, SetLoading] = useState(false);
  const [question, SetQuestion] = useState([]);
  const [index, SetIndex] = useState(0);
  const [error, SetError] = useState(false);
  const [correct, SetCorrect] = useState(0);
  const [isModalOpen,SetisModalOpen]=useState(fasle)
  return <AppContext.Provider value='hello'>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }