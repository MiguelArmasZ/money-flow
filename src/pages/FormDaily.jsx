import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Feedback } from '../components/Feedback'
import { DataContext } from '../DataContext'
import { getCurrentDay, getMinDate } from '../helpers/getCurrentDay'
import { useForm } from '../hooks/useForm'
import { useGetCollection } from '../hooks/useGetCollection'

export const FormDaily = () => {
  const { formType, feedbackMssg } = useContext(DataContext)

  const [action, handleChange, handleSubmit] = useForm(
    {
      date: getCurrentDay(),
      concept: '',
      category: '',
      quantity: ''
    },
    'registro agregado'
  )

  const naviagtion = useNavigate()

  useEffect(() => {
    if (formType === '') naviagtion('/')
  }, [])

  const fieldsConfig = {
    database: () => {
      return formType === 'ingreso' ? 'incomes' : 'spents'
    },
    collection: () => {
      return formType === 'ingreso'
        ? useGetCollection('cat-incomes')
        : useGetCollection('cat-spents')
    },
    placeholder: () => {
      return formType === 'ingreso'
        ? 'Nómina de junio'
        : 'salida al cine'
    }
  }

  const { database, collection, placeholder } = fieldsConfig

  return (
    <section className='main'>
      <form
        className='fade Daily-form'
        onSubmit={(e) => handleSubmit(e, database(), action)}
      >
        <h2
          className={`heading ${
            formType === 'ingreso' ? 'bg-green' : 'bg-red'
          }`}
        >
          registra un {formType}
        </h2>

        {collection()?.length === 0 && (
          <div className='mssg-not-category'>
            <p>
              no tienes ninguna categoría, añade al menos una para
              poder hacer tus registros.
              <Link to='/categorias'>añadir</Link>
            </p>
          </div>
        )}

        <ul className='Daily-ul'>
          <li className='Daily-field'>
            <label htmlFor='date'>fecha</label>
            <input
              name='date'
              onChange={handleChange}
              required
              autoComplete='true'
              id='date'
              type='date'
              value={action.date}
              max={getCurrentDay()}
              min={getMinDate()}
            />
          </li>

          <li className='Daily-field'>
            <label htmlFor='concept'>concepto</label>
            <input
              name='concept'
              onChange={handleChange}
              value={action.concept}
              required
              id='concept'
              type='text'
              maxLength={40}
              minLength={3}
              placeholder={placeholder()}
              autoComplete='off'
            />
          </li>
          <li className='Daily-field'>
            <label htmlFor='category'>categoría</label>
            <select
              name='category'
              onChange={handleChange}
              id='category'
              required
              value={action.category}
            >
              <option value='' disabled>
                -- Seleccione --
              </option>
              {collection()?.map((option) => (
                <option key={option.id} value={option.name}>
                  {option.name.toUpperCase()}
                </option>
              ))}
            </select>
          </li>
          <li className='Daily-field'>
            <label htmlFor='quantiy'>cantidad</label>
            <input
              name='quantity'
              onChange={handleChange}
              min={0}
              required
              id='quantiy'
              type='number'
              step={0.01}
              placeholder='50,45 €'
              value={action.quantity}
            />
          </li>
        </ul>
        <Feedback>{feedbackMssg}</Feedback>
        <div className='keypad keypad--2'>
          <button className='btn-form'>registrar</button>
          <Link to='/' className='btn-form bg-dark'>
            volver
          </Link>
        </div>
      </form>
    </section>
  )
}
