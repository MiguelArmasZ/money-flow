import React from 'react'
import { Link } from 'react-router-dom'

export const Btn = ({ children, class$ = '', to = '/' }) => {
    return (
        <Link to={to} className={`Btn ${class$}`}>
            {children}
        </Link>
    )
}
