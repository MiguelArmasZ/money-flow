import React, { useEffect } from 'react'
import { formatDate, formatMoney } from '../helpers/formatData'

export const CardRecord = ({ ...record }) => {
    const { date, concept, category, quantity } = record

    return (
        <li className='Card-record-item'>
            <p className='Card-record-point Card-record-point--date'>
                {formatDate(date)}
            </p>
            <p className='Card-record-point Card-record-point--concept'>
                {concept}
            </p>
            <p className='Card-record-point Card-record-point--category'>
                {category}
            </p>
            <p className='Card-record-point Card-record-point--money'>
                {formatMoney(quantity)}
            </p>
        </li>
    )
}
