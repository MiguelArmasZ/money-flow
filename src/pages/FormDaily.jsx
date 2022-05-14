import React, { useContext } from 'react'
import { DataContext } from '../DataContext'
import { getCurrentDay } from '../helpers/getCurrentDay'

export const FormDaily = () => {
    const { formType } = useContext(DataContext)

    return (
        <section className='main'>
            <form className='fade Daily-form'>
                <h1
                    className={`heading ${
                        formType === 'ingreso' ? 'bg-green' : 'bg-red'
                    }`}
                >
                    registra un {formType}
                </h1>

                <ul className='Daily-ul'>
                    <li className='Daily-field'>
                        <label htmlFor='date'>Fecha</label>
                        <input
                            required
                            autoComplete='true'
                            id='date'
                            type='date'
                            defaultValue={getCurrentDay()}
                        />
                    </li>

                    <li className='Daily-field'>
                        <label htmlFor='concept'>Concepto</label>
                        <input
                            required
                            id='concept'
                            type='text'
                            maxLength={35}
                            minLength={3}
                            placeholder='Pizza'
                        />
                    </li>
                    <li className='Daily-field'>
                        <label htmlFor='category'>Categoría</label>
                        <select id='category' required>
                            <option value='nomina'>nomina</option>
                            <option value=''>ventas</option>
                        </select>
                    </li>
                    <li className='Daily-field'>
                        <label htmlFor='quantiy'>Cantidad</label>
                        <input
                            min='0'
                            required
                            id='quantiy'
                            type='number'
                            step={0.01}
                            placeholder='50.45 €'
                        />
                    </li>
                </ul>
                <button className='btn-form'>registrar</button>
            </form>
        </section>
    )
}
