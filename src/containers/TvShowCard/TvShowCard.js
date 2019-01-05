import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTvShowInfo } from '../../thunks/fetchTvShowInfo.js'
import './TvShowCard.css'

export class TvShowCard extends Component {
  render() {
    const { title, network, image, fetchShowInfo } = this.props
    return (
      <article className='tv-show-card' onClick={() => fetchShowInfo(this.props.id)}>
        <img src={image} className='tv-card-img'/>
        <h3 className='tv-card-title'>{title}</h3>
        <p className='tv-card-network'>Network: {network}</p>
      </article>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchShowInfo: (id) => dispatch(fetchTvShowInfo(id))
})

export default connect(null, mapDispatchToProps)(TvShowCard)

