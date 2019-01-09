import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTvShowInfo } from '../../thunks/fetchTvShowInfo.js'
import './TvShowCard.css'
import { Link } from 'react-router-dom'

export class TvShowCard extends Component {
  render() {
    const { title, network, image } = this.props
    return (
      <article className='tv-show-card'>
        <Link to={`/tvshow/${this.props.id}`} key={this.props.id}>
          <div className='tv-card-img'>
            <img alt='series poster' src={image} className='tv-card-image'/>
          </div>
        </Link>
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
