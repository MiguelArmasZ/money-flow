import { useLiveQuery } from 'dexie-react-hooks'
import { useState } from 'react'
import { db } from '../IndexDB/createDB'

export const useGetCollection = (collection) => {
    const [collectionArr, setCollectionArr] = useState([])
    useLiveQuery(async () => {
        const data = await db[collection].toArray()

        setCollectionArr(data)
    })

    return collectionArr
}
