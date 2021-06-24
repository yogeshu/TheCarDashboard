import React from 'react'
import {useParams} from 'react-router-dom'
export default function CarDetails({data}) {
    const {carId}  = useParams();
    const carData = data.find(car => car.id === carId)
    return (
        <div className="text-center">

            <h1 className="card py-5 "> {carData.name} </h1>
            <p > ${carData.price}</p>
        </div>
    )
}
