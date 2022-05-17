import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { navbarLinks } from '../data/sidebar'
import { DataContext } from '../DataContext'
import { Icon } from './Icon'

export const Sidebar = () => {
    const { sidebar, setSidebar } = useContext(DataContext)
    function handleHideSidebar(e) {
        setSidebar(false)
    }
    return (
        <aside className={`Sidebar ${sidebar ? 'active' : ''}`}>
            <nav className='Sidebar-nav'>
                {navbarLinks.map((link) => (
                    <li key={link.text}>
                        <Icon
                            icon={link.icon}
                            class$='Sidebar-icon'
                        />
                        <NavLink
                            onClick={handleHideSidebar}
                            to={link.to}
                            className='Sidebar-link'
                        >
                            {link.text}
                        </NavLink>
                    </li>
                ))}
            </nav>
        </aside>
    )
}
