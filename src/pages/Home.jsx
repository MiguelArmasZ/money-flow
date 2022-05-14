import React from 'react'
import { Btn } from '../components/Btn'

export const Home = () => {
    return (
        <main className='content fade main'>
            <div className='keypad'>
                <Btn class$='bg-green txt-white'>agregar ingreso</Btn>
                <Btn class$='bg-red txt-white'>agregar gasto</Btn>
                <Btn class$='bg-blue txt-white'>agregar ahorro</Btn>
            </div>
        </main>
    )
}
