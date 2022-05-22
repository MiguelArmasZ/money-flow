import { useLiveQuery } from 'dexie-react-hooks'
import { db } from './createDB'

export const getCategories = () => {
  function getCollection(collection) {
    return useLiveQuery(() => db[collection].toArray())
  }

  return [
    {
      type: 'ingresos',
      items: getCollection('cat-incomes'),
      table: 'cat-incomes'
    },
    {
      type: 'gastos',
      items: getCollection('cat-spents'),
      table: 'cat-spents'
    }
  ]
}
