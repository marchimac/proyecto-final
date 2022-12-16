import { useContexto } from "../context/MealsContext"

import React from 'react'

export default function ShowResult() {

  const { tmb } = useContexto()

  return (
    <>
      {/* if(tmb) {
        <h2>Su metabolismo basal es de {tmb} kcal al día</h2>
      } */}
      {tmb}
    </>
  )
}