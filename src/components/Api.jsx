import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'

export default function Api() {
    
    const [ meals, setMeals ] = useState([])
    const [ nutrients , setNutrients ] = useState({})

    useEffect( () => {
        axios.get('https://api.spoonacular.com/mealplanner/generate?apiKey=45f3f23dd164438abb1babccb1e531ac&timeFrame=day&targetCalories=2000')
            .then( res => {
                console.log(res)
                setMeals(res.data.meals)
                setNutrients(res.data.nutrients)
            } )
            .catch(err => {
                console.log(err)
            })
    }, [])

  return (
    <>
        <h2>Datos desde la API</h2>
        <h3>{nutrients.calories}</h3>
            {meals.map( (meal) => (
                <Card className='d-inline-flex' key={meal.id}>
                    <Card.Img variant='bottom' src={`https://webknox.com/recipeImages/${meal.id}-556x370.jpg`}></Card.Img>
                    <Card.Title>{meal.title}</Card.Title>
                    <Card.Body>Ready in {meal.readyInMinutes} minutes</Card.Body>
                </Card>
            ) )}
    </>
  )
}