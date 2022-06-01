import React from 'react'
import { HashRouter } from 'react-router-dom'
import { DataProvider } from './DataContext'
import { Routing } from './routes/Routing'

export const App = () => {
  return (
    <DataProvider>
      <HashRouter>
        <Routing />
      </HashRouter>
    </DataProvider>
  )
}
