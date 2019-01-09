import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapDispatchToProps } from './App';
import { Route } from 'react-router-dom'
import { shallow } from 'enzyme'
import { fetchTvShows } from '../../thunks/fetchTvShows.js'

jest.mock('../../thunks/fetchTvShows.js')

describe('App', () => {
  let wrapper
  let mockFetchTvShows

  beforeEach(() => {
    mockFetchTvShows = jest.fn()
    wrapper = shallow(<App fetchTvShows={ mockFetchTvShows } />)
  })

  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot()
  })

  it('should render 6 routes', () => {

    expect(wrapper.find(Route).length).toEqual(6)
  })

  it('should fire fetchTvShows on componentDidMount', () => {

    wrapper.instance().componentDidMount()

    expect(mockFetchTvShows).toHaveBeenCalled()
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the correct params', () => {
      const mockDispatch = jest.fn()
      const mockUrl = 'www.thisurl.com'
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.fetchTvShows(mockUrl)

      expect(mockDispatch).toHaveBeenCalledWith(fetchTvShows(mockUrl))
    })
  })
})
