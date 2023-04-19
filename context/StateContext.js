import React, { createContext, useContext, useEffect, useState } from 'react'

const Context = createContext()

export const StateContext = ({children}) => {
    const [expanded, setExpanded] = useState(false)
    const [detailsExpanded, setDetailsExpanded] = useState(false)
    const [applicantDetailsExpanded, setApplicantDetailsExpanded] = useState(false)
    const [detailsExpandedEmployer, setDetailsExpandedEmployer] = useState(false)
    const [applicationExpanded, setApplicationExpanded] = useState(false)
    const [windowSize, setWindowSize] = useState(0)
    const [activeLink, setActiveLink] = useState('/applicant/profile')

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowSize(window.innerWidth)
        }
    }, [windowSize])

  return (
    <Context.Provider
        value={{expanded, setExpanded, applicantDetailsExpanded, setApplicantDetailsExpanded, 
          applicationExpanded, setApplicationExpanded,
          detailsExpandedEmployer, setDetailsExpandedEmployer,
           detailsExpanded, setDetailsExpanded, activeLink, setActiveLink, windowSize}}
    >{children}</Context.Provider>  
  )
}

export const useStateContext = () => useContext(Context)