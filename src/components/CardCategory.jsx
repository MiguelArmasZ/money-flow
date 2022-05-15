import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../DataContext'

export const CardCategory = ({ type, items = [] }) => {
    const { setFormType } = useContext(DataContext)

    function handleSetCategory(e) {
        setFormType(e.target.name)
    }

    return (
        <div className='Card-category'>
            <h2 className='Card-category-title'>{type}</h2>
            <ul className='Card-category-list'>
                {items.map((item) => (
                    <li
                        key={item.name}
                        className='Card-category-item'
                    >
                        {item.name}
                    </li>
                ))}
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
