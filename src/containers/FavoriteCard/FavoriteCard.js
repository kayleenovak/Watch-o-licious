import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToTracked, removeFromTracked, toggleFavorite, toggleWatched, toggleWatchList } from '../../actions/index.js'
import { handleTrackedEpisode } from '../../helpers/handleToggleTracked.js'


export class FavoriteCard extends Component {
    
  handleTrackedEpisode = (e) => {
    console.log(1)
    const matchedEpisode = this.props.tracked.find(episode => {
      return this.props.episode.url === episode.url
    })
    if(matchedEpisode === undefined) {
      this.props.addToTracked(this.props.episode)
      this.handleToggleTracked(e)
    } else {
      this.handleToggleTracked(e)
    }
  }

  handleToggleTracked = (e) => {
    if (e.target.value === 'favorite') {
      this.props.toggleFavorite(this.props.episode)
    } else if (e.target.value === 'watched') {
      this.props.toggleWatched(this.props.episode)
    } else if (e.target.value === 'watchlist') {
      this.props.toggleWatchList(this.props.episode)
    }
    this.handleRemoveTracked()
  }

  handleRemoveTracked = () => {
    const { favorite, watchlist, watched } = this.props.episode.tracked
    if (favorite === false && watchlist === false && watched === false) {
      this.props.removeFromTracked(this.props.episode)
    }
  }

  render() {
    const matchedTvShow = this.props.tvShows.find(show => {
      return show.id === parseInt(this.props.episode.showId)
    })

    return (
      <section>
        <img src={matchedTvShow.image} />
        <h3>Episode: {this.props.episode.title}</h3>
        <h5>{matchedTvShow.title}</h5>
        <button onClick={(e) => this.props.handleTracked(e, this.props.episode, this.props.tracked)} value='favorite'>Favorite</button>
        <button onClick={(e) => this.props.handleTracked(e, this.props.episode, this.props.tracked)} value='watchlist'>Watch List</button>
        <button onClick={(e) => this.props.handleTracked(e, this.props.episode, this.props.tracked)} value='watched'>Watched</button>
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  tvShows: state.tvShows,
  tracked: state.tracked
})

export const mapDispatchToProps = (dispatch) => ({
  handleTracked: (e, episode, tracked) => dispatch(handleTrackedEpisode(e, episode, tracked)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCard)