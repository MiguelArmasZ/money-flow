import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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

  const naviagtion = useNavigate()

  useEffect(() => {
    if (formType === '') naviagtion('/categorias')
  }, [])

  const fieldsConfig = {
    database: () => {
      return formType === 'ingresos' ? 'cat-incomes' : 'cat-spents'
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
        onSubmit={(e) => handleSubmit(e, database(), category)}
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
            autoComplete='off'
          />
        </div>
        <Feedback>{feedbackMssg}</Feedback>

        <div className='keypad keypad--2'>
          <button className='btn-form'>añadir</button>
          <Link to='/categorias' className='btn-form bg-dark'>
            volver
          </Link>
        </div>
      </form>
    </main>
  )
}
