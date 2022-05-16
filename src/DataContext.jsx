import React, { createContext, useState } from 'react'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false)
    const [formType, setFormType] = useState('')
    const [feedbackAlert, setFeedbackAlert] = useState(false)
    const [feedbackMssg, setFeedbackMssg] = useState('')

    return (
        <DataContext.Provider
            value={{
                sidebar,
                setSidebar,
                formType,
                setFormType,
                feedbackAlert,
                setFeedbackAlert,
                feedbackMssg,
                setFeedbackMssg
            }}
        >
            {children}
        </DataContext.Provider>
    )
}
