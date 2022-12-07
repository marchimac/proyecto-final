import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { Card } from 'react-bootstrap'

export default function Api() {
    
    const [ users, setUsers ] = useState([])

    useEffect( () => {
        axios.get('https://api.spoonacular.com/mealplanner/generate?apiKey=45f3f23dd164438abb1babccb1e531ac&timeFrame=day&targetCalories=2000')
            .then( res => {
                console.log(res)
                setUsers(res.data)
            } )
            .catch(err => {
                console.log(err)
            })
    }, [])

  return (
    <>
        <h2>Datos desde la API</h2>
            {/* {users.map( user => (
                <Card key={user.id}>
                    <Card.Img variant='top' src={user.data.meals.sourceUrl}></Card.Img>
                    <Card.Title>{user.title}</Card.Title>
                    <Card.Body>{user.readyInMinnu}</Card.Body>
                </Card>
            ) )} */}
    </>
  )
}