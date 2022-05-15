import Dexie from 'dexie'

export const db = new Dexie('MoneyFlow')

db.version(1).stores({
    'cat-incomes': '++id, name'
})

db.version(2).stores({
    'cat-spents': '++id, name'
})
