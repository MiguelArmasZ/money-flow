import React from 'react'
import { formatMoney } from '../helpers/formatData'

export const CardHistory = ({ ...item }) => {
    const { month, incomes, spents } = item
    const balance = incomes - spents

    return (
        <li className='History-item'>
            <p className='History-month'>{month}</p>
            <p className='History-data History-income'>
                {formatMoney(incomes)}
            </p>
            <p className='History-data History-spent'>
                {formatMoney(spents)}
            </p>
            <p
                className={`History-data History-balance ${
                    balance < 0 ? 'bg-red' : 'bg-green'
                }`}
            >
                {formatMoney(balance)}
            </p>
        </li>
    )
}
