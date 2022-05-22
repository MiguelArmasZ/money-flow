import React from 'react'
import { CardCategory } from '../components/CardCategory'
import { getCategories } from '../IndexDB/getCategories'

export const Categories = () => {
  return (
    <main className='main fade'>
      <section className='Categories'>
        {getCategories().map((category) => {
          const { type, items, table } = category

          return (
            <CardCategory
              table={table}
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
