import React from 'react'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { DataProvider } from './DataContext'
import { Routing } from './routes/Routing'

export const App = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </DataProvider>
  )
}
