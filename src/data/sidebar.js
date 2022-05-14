import {
    faCirclePlus,
    faFile,
    faArrowTrendDown,
    faSackDollar,
    faLayerGroup,
    faCalendarWeek,
    faPiggyBank
} from '@fortawesome/free-solid-svg-icons'

export const navbarLinks = [
    {
        text: 'registrar',
        to: '/',
        icon: faCirclePlus
    },
    {
        text: 'visión general',
        to: '/vision-general',
        icon: faFile
    },
    {
        text: 'ingresos',
        to: '/ingresos',
        icon: faSackDollar
    },
    {
        text: 'gastos',
        to: '/gastos',
        icon: faArrowTrendDown
    },
    {
        text: 'Ahorro',
        to: '/ahorro',
        icon: faPiggyBank
    },
    {
        text: 'categorías',
        to: '/categorias',
        icon: faLayerGroup
    },
    {
        text: 'Historial',
        to: '/historial',
        icon: faCalendarWeek
    }
]
