import React, { createContext, useState } from 'react'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false)
    const [formType, setFormType] = useState('null')

    return (
        <DataContext.Provider
            value={{
                sidebar,
                setSidebar,
                formType,
                setFormType
            }}
        >
            {children}
        </DataContext.Provider>
    )
}
