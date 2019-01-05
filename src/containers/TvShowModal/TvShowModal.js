import React, { Component } from 'react'
import { connect } from 'react-redux'

export class TvShowModal extends Component {

  findTvShow = () => {
    const matchingShow = this.props.tvShows.find(tvShow => {
      console.log(this.props.id, tvShow.id, parseInt(tvShow.id) === parseInt(this.props.id))
      return parseInt(tvShow.id) === parseInt(this.props.id)
    })
    return matchingShow
  }

  render() {
    if(this.props.tvShows.length) {
      const tvShowInfo = this.findTvShow()
      return (
        <section className='tv-show-modal'>
          <h3>{tvShowInfo.title}</h3>
        </section>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

export const mapStateToProps = (state) => ({
  tvShows: state.tvShows,
  tvShowEpisodes: state.tvShowInfo
})

export default connect(mapStateToProps)(TvShowModal)

