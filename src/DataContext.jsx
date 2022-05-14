import React, { createContext, useState } from 'react'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false)

    return (
        <DataContext.Provider
            value={{
                sidebar,
                setSidebar
            }}
        >
            {children}
        </DataContext.Provider>
    )
}
