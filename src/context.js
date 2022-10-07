import axios from "axios";
import React, { useState, useContext, useEffect } from "react";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const API_ENDPOINT = "https://opentdb.com/api.php?";

const url = "";
const tempUrl =
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [waiting, SetWaiting] = useState(true);
  const [loading, SetLoading] = useState(false);
  const [questions, SetQuestion] = useState([]);
  const [index, SetIndex] = useState(0);
  const [error, SetError] = useState(false);
  const [correct, SetCorrect] = useState(0);
  const [isModalOpen, SetisModalOpen] = useState(false);
  const fetchQuestions = async (url) => {
    SetWaiting(false);
    SetLoading(true);
    
    try {
      const response = await axios(url);
     const data= response.data.results
     if(data.length>1){
       SetQuestion(data);
       SetWaiting(false);
       SetLoading(false);
       SetError(false);

        
     }
    } catch (error) {

    }
  };
  useEffect(() => {
    fetchQuestions(tempUrl);
  }, []);
  return (
    <AppContext.Provider
      value={{
        waiting,
        loading,
        questions,
        index,
        error,
        correct,
        isModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
