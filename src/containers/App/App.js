import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import MainPage from '../../containers/MainPage/MainPage'
import { fetchTvShows } from '../../thunks/fetchTvShows.js'
import { connect } from 'react-redux'
// import { CardContainer } from '../../containers/CardContainer/CardContainer'

export class App extends Component {

  async componentDidMount() {
    await this.props.fetchTvShows()
  }

  render() {
    return (
      <div className="App">
        <Route exact to='/' component={ MainPage } />
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchTvShows: (url) => dispatch(fetchTvShows(url))
})

export default connect(null, mapDispatchToProps)(App)

        // <Route exact to='/favorites' component={ CardContainer } />
        // <Route exact to='/watched' component={ CardContainer } />
        // <Route exact to='/watchlist' component={ CardContainer } />
