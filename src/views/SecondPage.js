import React, { useEffect, useState } from "react"
import { Card, CardHeader, CardBody, CardTitle, Button, Input, CardText } from "reactstrap"

const SecondPage = () => {
  const [coins, setCoins] = useState({ BTCBRL: { ask: 0 } })
  const [inputValue, setInputValue] = useState("")
  const [convertedValue, setConvertedValue] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://economia.awesomeapi.com.br/last/BTC-BRL')
        const data = await response.json()
        setCoins(data)
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    }

    fetchData()
  }, [])

  function handleInputChange(e) {
    const value = e.target.value.toString()
    setInputValue(value)
    setConvertedValue(null)
    setError(null)
  }

  function handleTrocarClick() {
    if (!inputValue || !inputValue.trim()) {
      setError("Por favor, digite um valor no campo.")
      return
    }
    const converted = coins.BTCBRL.ask * parseFloat(inputValue)
    setConvertedValue(converted)
    setError(null)
  }

  return (
    <Card style={{ height: 'auto', paddingBottom: '30px' }}>
      <CardHeader>
        <CardTitle>Vamos converter moedas hoje?</CardTitle>
      </CardHeader>
      <CardBody style={{ display: 'flex', gap: '10px' }}>
        <Input
          style={{ height: '50px', width: '150px' }}
          placeholder="1"
          type="number"
          onChange={handleInputChange}
          value={inputValue}
        />
        <Button disabled style={{ width: '100px', height: '50px' }}>
          BTC
        </Button>
        <Input
          disabled
          style={{ height: '50px', width: '150px', background: 'transparent' }}
          placeholder={`${coins.BTCBRL.ask} R$`}
          type="number"
        />
        <Button disabled style={{ width: '100px', height: '50px' }}>
          BRL
        </Button>
        <Button color="primary" style={{ width: '200px', marginLeft: '30px' }} onClick={handleTrocarClick}>
          Trocar
        </Button>
      </CardBody>

      {error && <CardText style={{ color: 'red', padding: '23px', fontWeight:'bold' }}>{error}</CardText>}

      {convertedValue !== null && (
        <CardText style={{ fontWeight: 'bold', fontSize: '20px', padding: '23px' }}>
          {`${inputValue} BTC é o equivalente a ${convertedValue.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')} R$`}
        </CardText>
      )}
    </Card>
  )
}

export default SecondPage
