import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormComp() {
  return (
    <Form className='m-5'>
      <Form.Group className="mb-3" controlId="peso">
        <Form.Label>Peso</Form.Label>
        <Form.Control className='text-center' type="text" placeholder="Introduce tu peso en kg" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="estatura">
        <Form.Label>Estatura</Form.Label>
        <Form.Control className='text-center' type="text" id='estatura' placeholder="Introduce tu estatura en cm" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="edad">
        <Form.Label>Edad</Form.Label>
        <Form.Control className='text-center' type="text" id='edad' placeholder="Introduce tu edad en años" />
      </Form.Group>

      <Form.Select className='mb-3 text-center' >
        <option>Selecciona tu nivel de actividad</option>
        <option value='sedentaria'>Sedentaria</option>
        <option value='ligera'>Ligera</option>
        <option value='moderada'>Moderada</option>
        <option value='intensa'>Intensa</option>
        <option value='muy-intensa'>Muy intensa</option>
      </Form.Select>

      <Form.Group className="mb-3 d-flex justify-content-around" controlId="masculino">
        <Form.Check type="radio" name='gender' id='masculino' label="Masculino" />
      </Form.Group>

      <Form.Group className="mb-3 d-flex justify-content-around" controlId="femenino">
        <Form.Check type="radio" name='gender' id='femenino' label="Femenino" />
      </Form.Group>

      <Button className='m-1' variant="primary" type="submit">
        Calcular
      </Button>

      <Button className='m-1' variant="secondary" type="reset">
        Borrar
      </Button>

    </Form>
  );
}

export default FormComp;