import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Feedback } from '../components/Feedback'
import { DataContext } from '../DataContext'
import { useForm } from '../hooks/useForm'

export const FormCategory = () => {
    const { formType, feedbackMssg } = useContext(DataContext)
    const [category, handleChange, handleSubmit] = useForm(
        {
            name: ''
        },
        'categoría añadida'
    )

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
                <Feedback>{feedbackMssg}</Feedback>
                <button className='btn-form'>añadir</button>
                <Link
                    to='/categorias'
                    className='btn-form bg-dark mt-1'
                >
                    volver
                </Link>
            </form>
        </main>
    )
}
