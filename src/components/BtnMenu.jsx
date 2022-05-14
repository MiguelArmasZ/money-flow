import React, { useContext } from 'react'
import { DataContext } from '../DataContext'

export const BtnMenu = () => {
    const { sidebar, setSidebar } = useContext(DataContext)

    function handleSidebar() {
        setSidebar(!sidebar)
    }

    return (
        <div className='Btn-menu' onClick={handleSidebar}>
            <span className='Btn-line'></span>
            <span className='Btn-line'></span>
            <span className='Btn-line'></span>
        </div>
    )
}
