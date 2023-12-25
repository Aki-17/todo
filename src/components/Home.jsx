import React, { useState } from 'react'
import Card from './Card'

function Home() {


    let [data, setData] = useState([
        {
            id: 1,
            taskName: 'Yoga',
            desc: 'this is the description for My first Task',
        },
        {
            id: 2,
            taskName: 'Eat',
            desc: 'this is the description for My second Task',
        },
        {
            id: 3,
            taskName: 'Code',
            desc: 'this is the description for My third Task',
        },
    ])

    return <>

    </>
}

export default Home