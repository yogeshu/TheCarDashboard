import React from 'react'
import {useParams} from 'react-router-dom'

export default function Car({data}) {
    const {carId} = useParams();
    const carif = data.find(car => car.id === carId)
    return (
        <div>
            <h1> {carif.name} </h1>
            
        </div>
    )
}
