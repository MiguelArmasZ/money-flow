import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Feedback } from '../components/Feedback'
import { DataContext } from '../DataContext'
import { useForm } from '../hooks/useForm'
import { useGetCollection } from '../hooks/useGetCollection'
import { formatMoney } from '../helpers/formatData'

export const Saving = () => {
    const { feedbackMssg } = useContext(DataContext)
    const [saving, handleChange, handleSubmit] = useForm(
        {
            quantity: ''
        },
        'bien hecho'
    )

    function getTheSaving() {
        const collection = useGetCollection('saving')

        let total = 0
        for (let i = 0; i < collection?.length; i++) {
            total += Number(collection[i].quantity)
        }
        return total
    }

    return (
        <main className='main fade'>
            <form
                className='Category-form'
                onSubmit={(e) => handleSubmit(e, 'saving', saving)}
            >
                <h2 className='Category-form-title Saving-form-title'>
                    Actualmente tienes
                    <span>{formatMoney(getTheSaving()) || 0}</span>
                </h2>
                <div className='Category-form-field'>
                    <label htmlFor='quantity'>
                        haz crecer tu tesoro...
                    </label>
                    <input
                        id='quantity'
                        onChange={handleChange}
                        name='quantity'
                        type='number'
                        placeholder='1.000,00 €'
                        min={0}
                        step={0.01}
                        required
                        value={saving.quantity}
                        autoComplete='off'
                    />
                </div>
                <Feedback>{feedbackMssg}</Feedback>
                <button className='btn-form'>añadir</button>
                <Link to='/' className='btn-form bg-dark mt-1'>
                    volver
                </Link>
            </form>
        </main>
    )
}
