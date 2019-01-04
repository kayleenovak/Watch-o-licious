import React, { Component } from 'react'
import { connect } from 'react-redux'

export class FeaturedTvShow extends Component {
  constructor() {
    super()
    this.state = {
      featuredTvShow: {}
    }
  }

  componentDidMount() {
    if(this.props.tvShows) {
      this.findRandomMovie()
    }
  }

  findRandomMovie = () => {
    const max = this.props.tvShows.length - 1
    const min = 0
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    this.setState({
      featuredTvShow: this.props.tvShows[randomNumber]
    })
  }

  render() {
    if(this.state.featuredTvShow !== undefined && this.state.featuredTvShow.id) {
      const {title, runtime, premiered, rating, summary, image} = this.state.featuredTvShow
      return (
        <section className='featured-tv-show'>
          <h3>{title}</h3>
          <p>{summary}</p>
          <p>{runtime}</p>
          <p>{premiered}</p>
          <p>{rating}</p>
          <img src={image} />
        </section>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

export const mapStateToProps = (state) => ({
  tvShows: state.tvShows
})

export default connect(mapStateToProps)(FeaturedTvShow)
