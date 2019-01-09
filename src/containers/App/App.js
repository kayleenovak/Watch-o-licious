import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import MainPage from '../../containers/MainPage/MainPage'
import { fetchTvShows } from '../../thunks/fetchTvShows.js'
import { connect } from 'react-redux'
import TvShowModal from '../TvShowModal/TvShowModal.js'
import CardContainer from '../CardContainer/CardContainer'
import { Header } from '../../components/Header/Header.js'
import { NoMatch } from '../../components/NoMatch/NoMatch.js'
import PropTypes from 'prop-types'

export class App extends Component {

  async componentDidMount() {
    await this.props.fetchTvShows()
  }

  render() {
    return (
      <div className="app">
          <Header />
          <Switch>
            <Route exact path='/' component={ MainPage } />
            <Route exact path='/tvshow/:id' render={({ match }) => {
              const { id } = match.params
              return <TvShowModal id={ id } />
              }} 
            />
            <Route exact path='/favorites' component={ CardContainer } />
            <Route exact path='/watched' component={ CardContainer } />
            <Route exact path='/watchlist' component={ CardContainer } />
            <Route component={NoMatch} />
          </Switch>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchTvShows: (url) => dispatch(fetchTvShows(url))
})

export default withRouter(connect(null, mapDispatchToProps)(App))

App.propTypes = {
  fetchTvShows: PropTypes.func.isRequired
}

