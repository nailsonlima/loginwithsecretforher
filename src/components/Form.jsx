import React, { useState } from 'react'



function Form({setSecret, secret}) {

    const [pass, setPass] = useState('')
    const [user, setUser] = useState('')


    const handleOnCLick = (e) => {
        e.preventDefault()
        if(pass === '2706' && user === 'we'){
            setSecret(!secret)
        }
    }

  return (
    <form className='form' onSubmit={handleOnCLick}>
        <div>
            <label htmlFor="user">user:</label>
            <input 
            type="text" 
            name="user"
            value={user}
            onChange={e => setUser(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="pass">pass:</label>
            <input 
            type="password" 
            name="pass"
            value={pass}
            onChange={e => setPass(e.target.value)}
            />
        </div>
        <div>
            <button type='submit'>Ready</button>
        </div>
    </form>
  )
}

export default Form
