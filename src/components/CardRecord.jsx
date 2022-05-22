import React, { useEffect } from 'react'
import { formatDate, formatMoney } from '../helpers/formatData'
import { indexForRecords } from '../helpers/indexForRecords'
import { db } from '../IndexDB/createDB'
import Trash from '../assets/trash.png'

export const CardRecord = ({ ...record }) => {
  const { id, date, concept, category, quantity, table } = record

  useEffect(() => {
    indexForRecords()
  }, [])

  function handleDelete(e) {
    db[table].delete(Number(e.target.id))
  }

  return (
    <li className='Card-record-item'>
      <p className='Card-record-point Card-record-point--date'>
        {formatDate(date)}
      </p>
      <p className='Card-record-point Card-record-point--concept'>
        {concept}
      </p>
      <p className='Card-record-point Card-record-point--category'>
        {category}
      </p>
      <p className='Card-record-point Card-record-point--money'>
        {formatMoney(quantity)}
      </p>
      <span className='Card-record-point--index'>1</span>
      <img
        id={id}
        onClick={handleDelete}
        className='delete-item delete-item--record'
        src={Trash}
        alt='icono para eliminar'
      />
    </li>
  )
}
