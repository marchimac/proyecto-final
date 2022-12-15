import React, { useState } from 'react';
import { FormGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import { useRef } from 'react';
// import React from 'react';
// const TMB = 0
// let TMB = 0

function FormComp(props) {

  const pesoRef = React.useRef()
  const estaturaRef = React.useRef()
  const edadRef = React.useRef()

  const peso = pesoRef
  const estatura = estaturaRef
  const edad = edadRef

  const [actividad, setActividad] = useState('')
  const [genero, setGenero] = useState('')

  // const TMB = 0

  const guardarActividad = (e) => {
    setActividad(e.target.value)
    console.log(e);
  }

  const guardarGenero = (e) => {
    setGenero(e.target.value)
    console.log(e);
  }

  const handleSubmit = (e) => {

    e.preventDefault()
    console.log('Click')
    console.log(`El peso es ${peso.current.value} kg`)
    console.log(`La estatura es ${estatura.current.value} cm`)
    console.log(`La edad es ${edad.current.value} años`)
    console.log(`La actividad es ${actividad}`)
    console.log(`El genero es ${genero}`)
    
    
  }
  
  // if ({genero} === 'masculino' && {actividad} === 'sedentaria') {
  //   TMB = ((({peso} * 10) + ({estatura} * 6.25) - ({edad} * 5) + 5) + 5) * 1.2
  // } else if ({genero} === 'masculino' && {actividad} === 'sedentaria') {
  //   TMB = ((({peso} * 10) + ({estatura} * 6.25) - ({edad} * 5) + 5) + 5) * 1.375
  // }

  // switch ({genero} = 'masculino') {

  //   case {actividad} = 'sedentaria':
  //     TMB = ((({peso} * 10) + ({estatura} * 6.25) - ({edad} * 5) + 5) + 5) * 1.2
  //     break;

  //   case {actividad} = 'ligera':
  //     TMB = ((({peso} * 10) + ({estatura} * 6.25) - ({edad} * 5) + 5) + 5) * 1.375
  //     break;
  
  //   default:
  //     break;
  // }

  return (
    <Form style={{width: '75%'}} onSubmit={handleSubmit} className='m-auto mt-3 border p-3 text-center'>
      <Form.Group className="mb-3 border p-3 rounded bg-primary" controlId="peso">
        <Form.Label>Peso</Form.Label>
        <Form.Control className='text-center' type="text" placeholder="Introduce tu peso en kg" ref={pesoRef} />
      </Form.Group>

      <Form.Group className="mb-3 border p-3 rounded bg-primary" controlId="estatura">
        <Form.Label>Estatura</Form.Label>
        <Form.Control className='text-center' type="text" placeholder="Introduce tu estatura en cm" ref={estaturaRef} />
      </Form.Group>

      <Form.Group className="mb-3 border p-3 rounded bg-primary" controlId="edad">
        <Form.Label>Edad</Form.Label>
        <Form.Control className='text-center' type="text" placeholder="Introduce tu edad en años" ref={edadRef} />
      </Form.Group>

      <Form.Select className='mb-3 text-center p-3 rounded' value={actividad} onChange={guardarActividad} >
        <option>Nivel de actividad</option>
        <option value='sedentaria'>Sedentaria</option>
        <option value='ligera'>Ligera</option>
        <option value='moderada'>Moderada</option>
        <option value='intensa'>Intensa</option>
        <option value='muy-intensa'>Muy intensa</option>
      </Form.Select>

      <FormGroup className='mb-3 border pt-3 rounded' value={genero} onChange={guardarGenero} >
        <Form.Label>Selecciona tu género</Form.Label>
        <Form.Group className="mb-3 d-flex justify-content-around" controlId="masculino">
          <Form.Check type="radio" name='gender' id='masculino' label="Masculino" value='masculino' />
        </Form.Group>

        <Form.Group className="mb-3 d-flex justify-content-around" controlId="femenino">
          <Form.Check type="radio" name='gender' id='femenino' label="Femenino" value='femenino' />
        </Form.Group>
      </FormGroup>

      <FormGroup className='mb-3 border p-3 rounded' >
        <Button className='m-1' variant="primary" type="submit">
          Calcular
        </Button>

        <Button className='m-1' variant="secondary" type="reset">
          Borrar
        </Button>
      </FormGroup>

    </Form>
  );
}

export default FormComp;