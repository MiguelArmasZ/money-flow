import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../DataContext'
import { db } from '../IndexDB/createDB'
import { PLaceholder } from './PLaceholder'
import Trash from '../assets/trash.png'

export const CardCategory = ({ type, items = [], table = '' }) => {
  const { setFormType } = useContext(DataContext)

  function handleSetCategory(e) {
    setFormType(e.target.name)
  }

  function handleDelete(e) {
    db[table].delete(Number(e.target.id))
  }

  return (
    <div className='Card-category'>
      <h2 className='Card-category-title'>{type}</h2>
      <ul className='Card-category-list'>
        {items?.length > 0 ? (
          items?.map((item) => (
            <li key={item.name} className='Card-category-item'>
              {item.name}

              <img
                id={item.id}
                onClick={handleDelete}
                className='delete-item'
                src={Trash}
                alt='icono para eliminar'
              />
            </li>
          ))
        ) : (
          <PLaceholder>añade tu primera categoría</PLaceholder>
        )}
      </ul>
      <Link
        onClick={handleSetCategory}
        name={type}
        to='/add-categoria'
        className='Card-category-add'
      >
        añadir
      </Link>
    </div>
  )
}
