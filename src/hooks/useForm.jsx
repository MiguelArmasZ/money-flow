import { useContext, useState } from 'react'
import { DataContext } from '../DataContext'
import { db } from '../IndexDB/createDB'

export const useForm = (initialValue, message) => {
    const { setFeedbackAlert, setFeedbackMssg } =
        useContext(DataContext)
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

            setFeedbackMssg(message)

            setFeedbackAlert(true)

            setTimeout(() => {
                setFeedbackAlert(false)
            }, 2000)
        } catch (error) {
            console.error(`EL error es ${error}`)
        }
    }

    return [field, handleChange, handleSubmit]
}
