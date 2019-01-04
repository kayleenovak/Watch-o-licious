import React, { Component } from 'react'
import { connect } from 'react-redux'
import tvShowCard from '../tvShowCard/tvShowCard'

export class CardContainer extends Component {
  
  render() {
    const tvCards = this.props.tvShows.map(tvShow => {
      return <tvShowCard {...tvShow} />
    })
    return (

    )
  }
}

export const mapStateToProps = (state) => ({
  tvShows: state.tvShows
})

export default connect(mapStateToProps)(CardContainer)