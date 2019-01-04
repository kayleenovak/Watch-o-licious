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
    const max = this.props.tvShows.length - 1
    const min = 0
    console.log(this.props)
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(randomNumber)
    this.setState({
      featuredMovie: this.props.tvShows[randomNumber]
    })
  }

  render() {
    if(this.props.tvShows.length) {
      return (
        <section>
          <h3>{this.state.featuredMovie.title}</h3>
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
