import React from 'react'
import { CardHistory } from '../components/CardHistory'
import { PLaceholder } from '../components/PLaceholder'
import { getValuesForHistory } from '../helpers/getValuesForHistory'
import { useGetCollection } from '../hooks/useGetCollection'

export const History = () => {
    const incomes = useGetCollection('incomes')
    const spents = useGetCollection('spents')
    const arrUI = getValuesForHistory(incomes, spents)

    return (
        <main className='main content fade'>
            <section className='History'>
                <ul className='History-list'>
                    {arrUI?.length > 0 ? (
                        arrUI?.map((item) => (
                            <CardHistory key={item.month} {...item} />
                        ))
                    ) : (
                        <PLaceholder>
                            aún no tienes registros en ningún mes
                        </PLaceholder>
                    )}
                </ul>
            </section>
        </main>
    )
}
