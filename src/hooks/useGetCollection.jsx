import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../IndexDB/createDB'

export const useGetCollection = (collection) => {
    const arrWithCollection = useLiveQuery(() =>
        db[collection].toArray()
    )

    return arrWithCollection
}
