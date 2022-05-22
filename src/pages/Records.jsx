import { useLiveQuery } from 'dexie-react-hooks'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { CardRecord } from '../components/CardRecord'
import { PLaceholder } from '../components/PLaceholder'
import { formatMoney } from '../helpers/formatData'
import { db } from '../IndexDB/createDB'

export const Records = () => {
  const { pathname } = useLocation()
  const incomes = useLiveQuery(() =>
    db.incomes.reverse().sortBy('date')
  )
  const spents = useLiveQuery(() =>
    db.spents.reverse().sortBy('date')
  )

  const condition = pathname === '/ingresos'
  let total = 0

  const infoConfig = {
    database: () => {
      return condition ? incomes : spents
    },
    class$: () => {
      return condition ? 'bg-green' : 'bg-red'
    },
    title: () => {
      return condition ? 'ingresos' : 'gastos'
    },
    table: () => {
      return condition ? 'incomes' : 'spents'
    }
  }

  const { database, class$, title, table } = infoConfig
  return (
    <main className='main fade content'>
      <section className='Record'>
        <h2 className={`heading ${class$()}`}>{title()}</h2>
        <ul className='Card-record'>
          {database()?.length > 0 ? (
            database()?.map((record, i, arr) => {
              total = 0
              for (let i = 0; i < arr.length; i++) {
                total += Number(arr[i].quantity)
              }

              return (
                <CardRecord
                  key={record.id}
                  table={table()}
                  {...record}
                />
              )
            })
          ) : (
            <PLaceholder>aún no tienes ningún registro</PLaceholder>
          )}
        </ul>
        <p className='Record-total'>
          <span>total</span>
          <span>{formatMoney(total)} </span>
        </p>
      </section>
    </main>
  )
}
