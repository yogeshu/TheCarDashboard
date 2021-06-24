import React from 'react'
import {useParams} from 'react-router-dom'
export default function CarDetails({data}) {
    const {carId}  = useParams();
    const carData = data.find(car => car.id === carId)
    return (
        <div>
            <h1> {carData.name} </h1>
        </div>
    )
}
