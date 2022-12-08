import React, { useState } from 'react';
import { FormGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormComp(props) {

  const [peso, setPeso] = useState('')
  const [estatura, setEstatura] = useState('')
  const [edad, setEdad] = useState('')

  const guardarPeso = (e) => {
    setPeso(e.target.value)
    console.log(e);
  }

  const guardarEstatura = (e) => {
    setEstatura(e.target.value)
    console.log(e);
  }

  const guardarEdad = (e) => {
    setEdad(e.target.value)
    console.log(e);
  }

  const validarForm = (e) => {
    e.preventDefault()
    console.log('Click');
  }

  return (
    <Form style={{width: '75%'}} onSubmit={validarForm} className='m-auto mt-3 border p-3 text-center'>
      <Form.Group className="mb-3 border p-3 rounded bg-primary" controlId="peso">
        <Form.Label>Peso</Form.Label>
        <Form.Control className='text-center' type="text" placeholder="Introduce tu peso en kg" value={peso} onChange={guardarPeso} />
      </Form.Group>

      <Form.Group className="mb-3 border p-3 rounded bg-primary" controlId="estatura">
        <Form.Label>Estatura</Form.Label>
        <Form.Control className='text-center' type="text" placeholder="Introduce tu estatura en cm" value={estatura} onChange={guardarEstatura} />
      </Form.Group>

      <Form.Group className="mb-3 border p-3 rounded bg-primary" controlId="edad">
        <Form.Label>Edad</Form.Label>
        <Form.Control className='text-center' type="text" placeholder="Introduce tu edad en años" value={edad} onChange={guardarEdad} />
      </Form.Group>

      <Form.Select className='mb-3 text-center p-3 rounded' >
        <option>Indícanos tu nivel de actividad</option>
        <option value='sedentaria'>Sedentaria</option>
        <option value='ligera'>Ligera</option>
        <option value='moderada'>Moderada</option>
        <option value='intensa'>Intensa</option>
        <option value='muy-intensa'>Muy intensa</option>
      </Form.Select>

      <FormGroup className='mb-3 border pt-3 rounded'>

        <Form.Label>Selecciona tu género</Form.Label>
        <Form.Group className="mb-3 d-flex justify-content-around" controlId="masculino">
          <Form.Check type="radio" name='gender' id='masculino' label="Masculino" />
        </Form.Group>

        <Form.Group className="mb-3 d-flex justify-content-around" controlId="femenino">
          <Form.Check type="radio" name='gender' id='femenino' label="Femenino" />
        </Form.Group>
      </FormGroup>

      <FormGroup className='mb-3 border pt-3 rounded'>

        <Form.Label>Elige el metodo para el cálculo</Form.Label>

        <Form.Group className="mb-3 d-flex justify-content-around" controlId="harris">
          <Form.Check type="radio" name='method' id='harris' label="Harris-Benedict" />
        </Form.Group>

        <Form.Group className="mb-3 d-flex justify-content-around" controlId="femenino">
          <Form.Check type="radio" name='method' id='mifflin' label="Mifflin-St Jeor" />
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