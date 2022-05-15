import React from 'react'
import { CardCategory } from '../components/CardCategory'
import { categories } from '../data/categories'
import { useGetData } from '../IndexDB/useGetData'

export const Categories = () => {
    const incomes = useGetData('cat-incomes')
    const spents = useGetData('cat-spents')

    function createArr() {
        return [incomes, spents]
    }
    console.log(createArr())

    return (
        <main className='main fade'>
            <section className='Categories'>
                {categories.map((category) => {
                    const { type, items } = category

                    return (
                        <CardCategory
                            key={type}
                            type={type}
                            items={items}
                        />
                    )
                })}
            </section>
        </main>
    )
}
