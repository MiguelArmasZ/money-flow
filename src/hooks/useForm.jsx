import { useState } from 'react'
import { db } from '../IndexDB/createDB'

export const useForm = (initialValue) => {
    const [field, setField] = useState(initialValue)

    function handleChange(e) {
        setField({
            ...field,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e, collection, objAdd) {
        e.preventDefault()

        try {
            db[collection].add(objAdd)
            setField(initialValue)
        } catch (error) {
            console.error(`EL error es ${error}`)
        }
    }

    return [field, handleChange, handleSubmit, handleSubmit]
}
