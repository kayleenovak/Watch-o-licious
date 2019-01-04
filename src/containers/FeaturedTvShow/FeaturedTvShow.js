import React, { Component } from 'react'
import { connect } from 'react-redux'

export class FeaturedMovie extends Component {
  constructor() {
    super()
    this.state = {
      featuredMovie: {}
    }
  }

  componentDidMount() {
    this.findRandomMovie()
  }

  findRandomMovie = () => {
    console.log(this.props.tvShows)
    const max = this.props.tvShows.length - 1
    const min = 0
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    this.setState({
      featuredMovie: this.props.tvShows[randomNumber]
    })
  }

  render() {
    console.log(this.state.featuredMovie)
    const {title, runtime, premiered, rating, summary, image} = this.state.featuredMovie
    if(this.props.tvShows.length) {
      return (
        <section>
          <h3>{title}</h3>
          <p>{summary}</p>
          <p>{runtime}</p>
          <p>{premiered}</p>
          <p>{rating}</p>
          <img src={image} />
        </section>
      )
    } else {
      return <div></div>
    }
  }
}

export const mapStateToProps = (state) => ({
  tvShows: state.tvShows
})

export default connect(mapStateToProps)(FeaturedMovie)
