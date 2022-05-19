import React from 'react'
import { formatMoney } from '../helpers/formatData'

export const CardOverview = ({ ...info }) => {
    const { title, subTitle, quantity } = info

    return (
        <li className='Overview-info-item Card-record-item'>
            <p className='Card-record-point Card-record-point--date'>
                {title}
            </p>
            <p className='Card-record-point Card-record-point--concept'>
                {subTitle}
            </p>
            <p className='Overview-info-money Card-record-point--money'>
                {formatMoney(quantity ? quantity : 0)}
            </p>
        </li>
    )
}
