import React, { useContext } from 'react'
import { DataContext } from '../DataContext'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { Icon } from './Icon'

export const Feedback = ({ children }) => {
    const { feedbackAlert } = useContext(DataContext)

    return (
        <p className={`feedback ${feedbackAlert ? 'active' : ''}`}>
            <Icon icon={faCheckCircle} /> {children}
        </p>
    )
}
