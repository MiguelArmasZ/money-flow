import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'

export const NotFound = () => {
  return (
    <div className='not-found'>
      <Header />
      <h2>¡404! Página no encontrada</h2>
      <Link className='btn' to='/'>
        ir al inicio
      </Link>
    </div>
  )
}
