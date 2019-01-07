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

  render() {
    const { episode, runtime, summary, title, airdate } = this.props
    return (
      <section className='episode' onClick={() => this.expandEpisode()}>
        <h3>Episode {episode}: {title}</h3>
        {
          !this.state.expanded ? null : <div><p>{summary}</p><p>Runtime: {runtime} minutes</p><p>Original airdate: {airdate}</p><button>Favorite</button><button>Watch List</button><button>Watched</button></div>
        }
      </section>
    )
  }
}