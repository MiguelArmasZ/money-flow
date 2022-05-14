import React from 'react'
import { BtnMenu } from './BtnMenu'

export const Header = () => {
    return (
        <header className='Header'>
            <div className='Header-wrap'>
                <BtnMenu />
                <h1 className='Header-title'>MoneyFlow</h1>
            </div>
        </header>
    )
}
