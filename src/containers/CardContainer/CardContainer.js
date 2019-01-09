import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TvShowCard from '../TvShowCard/TvShowCard'
import './CardContainer.css'
import FavoriteCard from '../FavoriteCard/FavoriteCard.js'

export class CardContainer extends Component {

  shuffleTvShows = (tvShows) => {
    for (let i = tvShows.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tvShows[i], tvShows[j]] = [tvShows[j], tvShows[i]];
    }
    return tvShows
  }

  displayTvShows = () => {
    const shuffledTvShows = this.shuffleTvShows(this.props.tvShows)
    const tvCards = shuffledTvShows.map(tvShow => {
      return <TvShowCard {...tvShow} />
    })
    return tvCards
  }

  splitLocation = (location) => {
    const splitLocation = location.split('/')
    return splitLocation[1]
  }

  findTrackedEpisodes = (locationString) => {
    const trackedEpisodes = this.props.trackedEpisodes.filter(episode => {
        return episode.tracked[locationString] === true
      }).map(episode => {
        return <FavoriteCard episode={episode}/>
      })
    return trackedEpisodes
  }
  
  render() {
    const { pathname } = this.props.location
    if(pathname === '/favorites' || pathname === '/watched' || pathname === '/watchlist') {
      const locationString = this.splitLocation(pathname)
      const trackedEpisodes = this.findTrackedEpisodes(locationString)
      if(trackedEpisodes.length) {
        return (
          <section className='tracked-episodes'>
            {trackedEpisodes}
          </section>
        )
      } else {
        return <div className='no-shows'>You have no {locationString} shows</div>
      }
    } else {
      const tvCards = this.displayTvShows()
      return (
        <section className='card-container'>
          {tvCards}
        </section>
      )
    }
  }
}

export const mapStateToProps = (state) => ({
  tvShows: state.tvShows,
  trackedEpisodes: state.tracked
})

export default withRouter(connect(mapStateToProps)(CardContainer))