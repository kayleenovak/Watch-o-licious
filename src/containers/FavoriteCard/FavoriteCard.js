import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToTracked, removeFromTracked, toggleFavorite, toggleWatched, toggleWatchList } from '../../actions/index.js'

export class FavoriteCard extends Component {
  render() {
    const matchedTvShow = this.props.tvShows.find(show => {
      return show.id === parseInt(this.props.episode.showId)
    })
    return (
      <section>
        <img src={matchedTvShow.image} />
        <h3>Episode: {this.props.episode.title}</h3>
        <h5>{matchedTvShow.title}</h5>
        <button>Favorite</button>
        <button>Watch List</button>
        <button>Watched</button>
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  tvShows: state.tvShows
})

export const mapDispatchToProps = (dispatch) => ({
  addToTracked: (episode) => dispatch(addToTracked(episode)),
  removeFromTracked: (episode) => dispatch(removeFromTracked(episode)),
  toggleFavorite: (episode) => dispatch(toggleFavorite(episode)),
  toggleWatched: (episode) => dispatch(toggleWatched(episode)),
  toggleWatchList: (episode) => dispatch(toggleWatchList(episode))
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCard)