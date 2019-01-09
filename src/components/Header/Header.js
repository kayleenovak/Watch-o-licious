import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  return (
    <div className='header'>
      <img alt='cupcake' src='/cupcake.svg' className='cupcake' />
      <h1 className='heading'>Watch-o-licious</h1>
      <section className='buttons'>
        <NavLink className='header-btn' to='/favorites'>Favorites</NavLink>
        <NavLink className='header-btn' to='/watched'>Watched</NavLink>
        <NavLink className='header-btn' to='/watchlist'>Watch List</NavLink>
        <NavLink className='header-btn' exact to='/'>Home</NavLink>
      </section>
    </div>
  )
}