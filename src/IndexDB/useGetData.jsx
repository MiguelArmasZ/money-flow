import { useLiveQuery } from 'dexie-react-hooks'
import { db } from './createDB'

export const useGetData = (collection) => {
    const arrayData = useLiveQuery(() => db[collection].toArray())

    return arrayData
}
