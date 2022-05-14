import React from 'react'
import { Link } from 'react-router-dom'

export const Btn = ({
    children,
    class$ = '',
    to = '/',
    name = '',
    fn = undefined
}) => {
    return (
        <Link
            onClick={fn}
            name={name}
            to={to}
            className={`btn ${class$}`}
        >
            {children}
        </Link>
    )
}
