import React, { useContext } from 'react'
import { DataContext } from '../DataContext'
import { useForm } from '../hooks/useForm'

export const FormCategory = () => {
    const { formType } = useContext(DataContext)
    const [category, handleChange, handleSubmit] = useForm({
        name: ''
    })

    const fieldsConfig = {
        database: () => {
            return formType === 'ingresos'
                ? 'cat-incomes'
                : 'cat-spents'
        },
        placeholder: () => {
            return formType === 'ingresos' ? 'Nómina' : 'Hipoteca'
        }
    }

    const { database, placeholder } = fieldsConfig

    return (
        <main className='main fade'>
            <form
                className='Category-form'
                onSubmit={(e) =>
                    handleSubmit(e, database(), category)
                }
            >
                <h2 className='Category-form-title'>
                    Añade tu categoría de {formType}
                </h2>
                <div className='Category-form-field'>
                    <label htmlFor='name'>nombre</label>
                    <input
                        id='name'
                        onChange={handleChange}
                        name='name'
                        type='text'
                        placeholder={placeholder()}
                        maxLength={25}
                        minLength={2}
                        required
                        value={category.name}
                    />
                </div>
                <button className='btn-form'>añadir</button>
            </form>
        </main>
    )
}
