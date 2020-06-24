import { ROUTES } from "../../consts"

const STORYLINE = [

    {
        1: {title: 'Intro deel 1', name: 'introPart1'},
        2: {title: 'Intro deel 2', name: 'introPart2'},
        3: {title: 'Intro deel 3', name: 'introPart3'},
    },
    {
        imageName: 'Italy',
        dutchName: 'Italië',
        assignments: ROUTES.TaskSpain,
        contrastColor: true,
        color: true,
        continent: 'Europe'
    },
    {
        imageName: 'Spain',
        dutchName: 'Spanje',
        assignments: ROUTES.TaskItaly,
        contrastColor: true,
        color: true,
        continent: 'Europe'
    },

]

export default STORYLINE