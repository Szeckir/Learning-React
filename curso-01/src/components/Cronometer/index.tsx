import React from 'react'
import Button from '../Button'
import Clock from './Clock'

function Cronometer() {
  return (
    <div>
        <p>Escolha um card e inicie o cronômetro</p>

        <div>
            <Clock/>
        </div>
        <Button>
            Começar
        </Button>
    </div>
  )
}

export default Cronometer