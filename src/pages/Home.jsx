import React, { useContext } from 'react'
import { Btn } from '../components/Btn'
import { DataContext } from '../DataContext'

export const Home = () => {
    const { setFormType } = useContext(DataContext)

    function handleChangeForm(e) {
        setFormType(e.target.name)
    }

    return (
        <main className='Home fade main'>
            <div className='keypad'>
                <Btn
                    fn={handleChangeForm}
                    name='ingreso'
                    to='registrar'
                    class$='bg-green txt-white'
                >
                    agregar ingreso
                </Btn>
                <Btn
                    fn={handleChangeForm}
                    name='gasto'
                    to='registrar'
                    class$='bg-red txt-white'
                >
                    agregar gasto
                </Btn>
                <Btn class$='bg-blue txt-white'>agregar ahorro</Btn>
            </div>
        </main>
    )
}
