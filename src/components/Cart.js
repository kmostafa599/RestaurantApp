import { TextField } from '@mui/material'
import React from 'react'

const Cart = () => {
  return (
    <div>
        <TextField
          disabled
          id="standard-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
    </div>
  )
}

export default Cart