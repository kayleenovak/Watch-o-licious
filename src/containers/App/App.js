import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import MainPage from '../../containers/MainPage/MainPage'
import { fetchTvShows } from '../../thunks/fetchTvShows.js'
import { connect } from 'react-redux'
import TvShowModal from '../TvShowModal/TvShowModal.js'

export class App extends Component {

  async componentDidMount() {
    await this.props.fetchTvShows()
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/' component={ MainPage } />
          <Route path='/tvshow/:id' render={({ match }) => {
            const { id } = match.params
            return <TvShowModal id={ id }/>
            }} 
          />
        </Switch>
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
