import { useState } from 'react'

import Form from './components/Form'

import './App.css'

function App() {

  const [secret, setSecret] = useState(true)

  return (
    <div className="app">
      <Form secret={secret} setSecret={setSecret}/>
      <p className={secret ? 'off' : 'on'}>
        Você é uma mulher incrivel, já disse isso diversas vezes e nunca cansei, nunca cansei de 
        te olhar, nunca cansei de te ouvir, nunca cansei de estar com você! Porque você é simplismente
        magnifica, estar com você é uma dádiva e eu sou muito grato ao nosso nós, eu te amo muito muito muito(...)
        namora comigo???
      </p>
    </div>
  )
}

export default App
