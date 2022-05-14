import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Sidebar } from './Sidebar'

export const Layout = () => {
    return (
        <>
            <Header />
            <div className='layout'>
                <Sidebar />
                <Outlet />
            </div>
        </>
    )
}
