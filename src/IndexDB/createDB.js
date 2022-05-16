import Dexie from 'dexie'

export const db = new Dexie('MoneyFlow')

db.version(1).stores({
    'cat-incomes': '++id, &name',
    'cat-spents': '++id, &name',
    incomes: '++id, date, concept, category, quantity',
    spents: '++id, date, concept, category, quantity'
})
