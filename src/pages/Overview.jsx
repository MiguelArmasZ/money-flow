import React from 'react'
import { CardOverview } from '../components/CardOverview'
import { formatMoney } from '../helpers/formatData'
import {
    getMaxCategoryValue,
    getMaxRecord,
    getTotalRecords
} from '../helpers/getMaxValue'
import { useGetCollection } from '../hooks/useGetCollection'

export const Overview = () => {
    const incomes = useGetCollection('incomes')
    const spents = useGetCollection('spents')

    const [maxIncome, categoryIncome] = getMaxCategoryValue(incomes)
    const [maxSpent, categorySpent] = getMaxCategoryValue(spents)
    const [maxRecordIncome] = getMaxRecord(incomes)
    const [maxRecordSpent] = getMaxRecord(spents)

    const totalIncomes = getTotalRecords(incomes)
    const totalSpents = getTotalRecords(spents)
    const balance = totalIncomes - totalSpents

    const arrayForBuildUI = [
        {
            title: 'categoría con más ingresos',
            subTitle: categoryIncome,
            quantity: maxIncome
        },
        {
            title: 'categoría con más gastos',
            subTitle: categorySpent,
            quantity: (maxSpent ??= 0)
        },
        {
            title: 'mayor ingreso',
            subTitle: maxRecordIncome.concept,
            quantity: maxRecordIncome.quantity
        },
        {
            title: 'mayor gasto',
            subTitle: maxRecordSpent.concept,
            quantity: maxRecordSpent.quantity
        }
    ]

    return (
        <main className='content fade main'>
            <section className='Overview'>
                <ul className='Overview-info'>
                    {arrayForBuildUI.map((info, i) => (
                        <CardOverview key={i} {...info} />
                    ))}
                </ul>
            </section>

            <ul className='Overview-balance'>
                <li className='Overview-balance-item Overview-balance-item--incomes'>
                    {formatMoney(totalIncomes)}
                </li>
                <li className='Overview-balance-item Overview-balance-item--spents'>
                    {formatMoney(totalSpents)}
                </li>
                <li
                    className={`Overview-balance-item Overview-balance-item--result ${
                        balance <= 0 ? 'danger' : 'good'
                    }`}
                >
                    {formatMoney(balance)}
                </li>
            </ul>
        </main>
    )
}
