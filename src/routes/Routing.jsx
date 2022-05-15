import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { Overview } from '../pages/Overview'
import { Incomes } from '../pages/Incomes'
import { Spents } from '../pages/Spents'
import { Home } from '../pages/Home'
import { Categories } from '../pages/Categories'
import { History } from '../pages/History'
import { Saving } from '../pages/Saving'
import { FormDaily } from '../pages/FormDaily'
import { FormCategory } from '../pages/FormCategory'

export const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='' element={<Home />} />
                    <Route path='registrar' element={<FormDaily />} />
                    <Route
                        path='vision-general'
                        element={<Overview />}
                    />
                    <Route path='ingresos' element={<Incomes />} />
                    <Route path='gastos' element={<Spents />} />
                    <Route path='ahorro' element={<Saving />} />
                    <Route
                        path='categorias'
                        element={<Categories />}
                    />
                    <Route
                        path='add-categoria'
                        element={<FormCategory />}
                    />
                    <Route path='historial' element={<History />} />
                </Route>
            </Routes>
        </>
    )
}
