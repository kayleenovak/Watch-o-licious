import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <img src='/cupcake.svg' className='cupcake' />
        <h1 className='heading'>Watch-o-licious</h1>
        <section className='buttons'>
          <NavLink to='/favorites'><button className='header-btn'>Favorites</button></NavLink>
          <NavLink to='/watched'><button className='header-btn'>Watched</button></NavLink>
          <NavLink to='/watchlist'><button className='header-btn'>Watch List</button></NavLink>
          <NavLink to='/'><button className='header-btn'>Home</button></NavLink>
        </section>
      </div>
    )
  }
}