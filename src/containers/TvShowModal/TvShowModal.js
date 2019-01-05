import React, { Component } from 'react'
import { fetchTvShowInfo } from '../../thunks/fetchTvShowInfo.js'
import { connect } from 'react-redux'

export class TvShowModal extends Component {

  findTvShow = () => {
    const matchingShow = this.props.tvShows.find(tvShow => {
      console.log(this.props.id, tvShow.id, parseInt(tvShow.id) === parseInt(this.props.id))
      return parseInt(tvShow.id) === parseInt(this.props.id)
    })
    return matchingShow
  }

  componentDidMount() {
    this.props.fetchShowInfo(this.props.id)
    
  }

  render() {
    if(this.props.tvShows.length && this.props.tvShowEpisodes.length) {
      const seasons = this.props.tvShowEpisodes.map(season => {
        return <li>{season.season}</li>
      })
      const tvShowInfo = this.findTvShow()
      return (
        <section className='tv-show-modal'>
          <h3>{tvShowInfo.title}</h3>
          <p>{tvShowInfo.summary}</p>
          <div>
            {seasons}
          </div>
        </section>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

export const mapStateToProps = (state) => ({
  tvShows: state.tvShows,
  tvShowEpisodes: state.tvShowEpisodes
})

export const mapDispatchToProps = (dispatch) => ({
  fetchShowInfo: (id) => dispatch(fetchTvShowInfo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TvShowModal)

