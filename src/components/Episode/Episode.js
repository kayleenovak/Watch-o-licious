import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToTracked, removeFromTracked, toggleFavorite, toggleWatched, toggleWatchList } from '../../actions/index.js'

export class Episode extends Component {
  constructor() {
    super()
    this.state = {
      expanded: false
    }
  }

  expandEpisode = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  handleTrackedEpisode = (e) => {
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
    const { episode, runtime, summary, title, airdate, image } = this.props.episode
    return (
      <section className='episode' onClick={() => this.expandEpisode()}>
        <h3>Episode {episode}: {title}</h3>
        {
          !this.state.expanded ? null : <div><p>{summary}</p><p>Runtime: {runtime} minutes</p><p>Original airdate: {airdate}</p><button onClick={(e) => this.handleTrackedEpisode(e)} value='favorite'>Favorite</button><button onClick={(e) => this.handleTrackedEpisode(e)} value='watchlist'>Watch List</button><button onClick={(e) => this.handleTrackedEpisode(e)} value='watched'>Watched</button></div>
        }
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  tracked: state.tracked
})

export const mapDispatchToProps = (dispatch) => ({
  addToTracked: (episode) => dispatch(addToTracked(episode)),
  removeFromTracked: (episode) => dispatch(removeFromTracked(episode)),
  toggleFavorite: (episode) => dispatch(toggleFavorite(episode)),
  toggleWatched: (episode) => dispatch(toggleWatched(episode)),
  toggleWatchList: (episode) => dispatch(toggleWatchList(episode))
})

export default connect(mapStateToProps, mapDispatchToProps)(Episode)