import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div>
        <NavLink to='/favorites'><button>Favorites</button></NavLink>
        <NavLink to='/watched'><button>Watched</button></NavLink>
        <NavLink to='/watchlist'><button>Watch List</button></NavLink>
      </div>
    )
  }
}