import React, { useContext } from 'react'
import { Feedback } from '../components/Feedback'
import { DataContext } from '../DataContext'
import { db } from '../IndexDB/createDB'

export const Reset = () => {
  const { setFeedbackAlert } = useContext(DataContext)

  function handlePartialReset() {
    db.incomes.clear()
    db.spents.clear()
    db.saving.clear()
    setFeedbackAlert(true)

    setTimeout(() => {
      setFeedbackAlert(false)
    }, 1500)
  }

  function handleTotalReset() {
    handlePartialReset()
    db['cat-incomes'].clear()
    db['cat-spents'].clear()
    setFeedbackAlert(true)

    setTimeout(() => {
      setFeedbackAlert(false)
    }, 1500)
  }

  return (
    <main className='main fade'>
      <section className='Reset'>
        <h2 className='Reset-title'>
          ¡Cuidado! Las siguientes acciones son irreversibles.
        </h2>

        <ul className='Card-reset-list'>
          <li className='Card-reset-item'>
            <h3 className='Card-reset-heading'>
              Reiniciar parcialmente
            </h3>
            <p className='Card-reset-p'>
              Se borraran todos los datos a excepción de las
              categorías que hayas guardado.
            </p>
            <button
              onClick={handlePartialReset}
              className='btn-form btn-reset bg-red txt-white'
            >
              reiniciar
            </button>
          </li>
          <li className='Card-reset-item'>
            <h3 className='Card-reset-heading'>
              Reiniciar totalmente
            </h3>
            <p className='Card-reset-p'>
              Se borraran todos los datos, incluyendo las categorías.
            </p>
            <button
              onClick={handleTotalReset}
              className='btn-form btn-reset bg-red txt-white'
            >
              reiniciar
            </button>
          </li>
        </ul>
        <Feedback>app reiniciada</Feedback>
      </section>
    </main>
  )
}
