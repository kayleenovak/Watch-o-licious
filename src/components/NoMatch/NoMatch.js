import React from 'react'
import { NavLink } from 'react-router-dom'

export const NoMatch = () => {
  return (
    <section>
      <h3>404 Error</h3>
      <NavLink to='/'>Click Here to return home</NavLink>
    </section>
    )
}