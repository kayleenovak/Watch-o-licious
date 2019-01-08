import React from 'react'
import { shallow } from 'enzyme'
import { FavoriteCard, mapStateToProps, mapDispatchToProps } from './FavoriteCard'

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
    expect(wrapper.find('button').length).toEqual(3)
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


})