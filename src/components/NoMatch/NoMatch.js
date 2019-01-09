import React from 'react'
import { NavLink } from 'react-router-dom'
import './NoMatch.css'

export const NoMatch = () => {
  return (
    <section className='four-o-four'>
      <h3 className='error-page'>404 Error</h3>
      <NavLink to='/'>Click here to return Home</NavLink>
    </section>
    )
}