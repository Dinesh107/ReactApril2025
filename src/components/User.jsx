import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div>
        <h1>User Profile page</h1>
        <p>Iser ID is <b>{id}</b></p>
    </div>
  )
}

export default User