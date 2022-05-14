import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Icon = ({ icon, class$ = '' }) => {
    return <FontAwesomeIcon className={class$} icon={icon} />
}
