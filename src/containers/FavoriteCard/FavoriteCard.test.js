import React from 'react'
import { shallow } from 'enzyme'
import { FavoriteCard, mapStateToProps, mapDispatchToProps } from './FavoriteCard'
import { handleTrackedEpisode } from '../../helpers/handleToggleTracked.js'

jest.mock('../../helpers/handleToggleTracked.js')

describe('FavoriteCard', () => {
  let wrapper
  let mockHandleTracked
  let mockTvShows
  let mockTracked
  let mockEpsiode

  beforeEach(() => {
    mockHandleTracked = jest.fn()
    mockTvShows = [{
      title: 'Cake Boss', 
      id: 921,
      image: 'www.thisimgage.com',
      tracked: {
        favorites: true,
        watched: true,
        watchlist: true,
      }
    }]
    mockTracked = [{
      title: 'Cake Boss',
      image: 'www.thisimgage.com', 
      id: 921,
      tracked: {
        favorites: true,
        watched: true,
        watchlist: true,
      }
    }]
    mockEpsiode = {
      title: 'Cake Boss',
      image: 'www.thisimgage.com', 
      showId: 921,
      tracked: {
        favorites: true,
        watched: true,
        watchlist: true,
      }
    }
    wrapper = shallow(<FavoriteCard episode={ mockEpsiode } tvShows={ mockTvShows } tracked={ mockTracked } handleTracked={ mockHandleTracked }/>)
  })

  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot()
  })

  it('should invoke findMatchedTvShow', () => {
    const spyMatchedTvShow = jest.spyOn(wrapper.instance(), 'findMatchedTvShow')

    wrapper.instance().forceUpdate()

    expect(spyMatchedTvShow).toHaveBeenCalled()
  })

  it('should render a section, image, h3, h5, and 3 buttons', () => {

    expect(wrapper.find('section').length).toEqual(1)
    expect(wrapper.find('img').length).toEqual(1)
    expect(wrapper.find('h3').length).toEqual(1)
    expect(wrapper.find('h5').length).toEqual(1)
    expect(wrapper.find('button').length).toEqual(4)
  })

  it('should invoke handleTracked on click of the favorite button', () => {
    const mockEvent = {
      target: {
        value: 'favorite'
      }
    }

    wrapper.find('.favorite-btn').simulate('click', mockEvent)

    expect(mockHandleTracked).toHaveBeenCalledWith(mockEvent, mockEpsiode, mockTracked)
  })

  it('should invoke handleTracked on click of the watchlist button', () => {
    const mockEvent = {
      target: {
        value: 'watchlist'
      }
    }

    wrapper.find('.watch-list-btn').simulate('click', mockEvent)

    expect(mockHandleTracked).toHaveBeenCalledWith(mockEvent, mockEpsiode, mockTracked)
  })

  it('should invoke handleTracked on click of the watched button', () => {
    const mockEvent = {
      target: {
        value: 'watched'
      }
    }

    wrapper.find('.watched-btn').simulate('click', mockEvent)

    expect(mockHandleTracked).toHaveBeenCalledWith(mockEvent, mockEpsiode, mockTracked)
  })

  describe('mapStateToProps', () => {
    it('should return an object with the keys of tvShows and tracked', () => {
      const mockState = {
        isLoading: false,
        hasErrored: false,
        tvShows: [],
        tracked: []
      }
      const expected = {
        tvShows: [],
        tracked: []
      }

      const result = mapStateToProps(mockState)

      expect(result).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the correct params', () => {
      const mockDispatch = jest.fn()
      const mockEvent = {
        target: {
          value: 'watched'
        }
      }
      const mockTracked = [{
        title: 'Cake Boss',
        image: 'www.thisimgage.com', 
        id: 921,
        tracked: {
          favorites: true,
          watched: true,
          watchlist: true,
        }
      }]
      const mockEpsiode = {
        title: 'Cake Boss',
        image: 'www.thisimgage.com', 
        showId: 921,
        tracked: {
          favorites: true,
          watched: true,
          watchlist: true,
        }
      }

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.handleTracked(mockEvent, mockEpsiode, mockTracked)

      expect(mockDispatch).toHaveBeenCalledWith(handleTrackedEpisode(mockEvent, mockEpsiode, mockTracked))
    })
  })
})