import React from 'react'

export default function Formulario() {
  return (
    <div>
        <form style={{width:'50%'}} className='m-auto mt-3 border p-3 text-center justify-content-start' >
            <label className="mb-3 mr-3 border p-3 rounded bg-primary" for='peso' >Peso<input type='text' name='peso' ></input></label><br/>
            <label className="mb-3 mr-3 border p-3 rounded bg-primary" for='estatura' >Estatura<input type='text' name='estatura' ></input></label><br/>
            <label className="mb-3 mr-3 border p-3 rounded bg-primary" for='edad' >Edad<input type='text' name='edad' ></input></label><br/>
            <h2>Nivel de actividad</h2><br/>
            <label>Sedentaria<input type='radio'></input></label><br/>
            <label>Ligera<input type='radio'></input></label><br/>
            <label>Moderada<input type='radio'></input></label><br/>
            <label>Intensa<input type='radio'></input></label><br/>
            <label>Muy intensa<input type='radio'></input></label><br/>
        </form>
    </div>
  )
}
