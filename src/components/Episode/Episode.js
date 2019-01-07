import React, { Component } from 'react'

export default class Episode extends Component {
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
      return this.props.url === episode.url
    })
    if(matchedEpisode === false) {
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
    this.props.handleRemoveTracked()
  }

  handleRemoveTracked = () => {
    const { favorite, watchlist, watched } = this.props.episode.tracked
    if (favorite === false && watchlist === false &&& watched === false) {
      this.props.removeFromTracked(this.props.episode)
    }
  }

  render() {
    const { episode, runtime, summary, title, airdate } = this.props.episode
    return (
      <section className='episode' onClick={() => this.expandEpisode()}>
        <h3>Episode {episode}: {title}</h3>
        {
          !this.state.expanded ? null : <div><p>{summary}</p><p>Runtime: {runtime} minutes</p><p>Original airdate: {airdate}</p><button value='favorite'>Favorite</button><button value='watchlist'>Watch List</button><button value='watched'>Watched</button></div>
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
  toggleWatched: (eipsode) => dispatch(toggleWatched(episode)),
  toggleWatchList: (episode) => dispatch(toggleWatchList(episode))
})