import React from 'react'
import { shallow } from 'enzyme'
import { isLoading, hasErrored} from '../../actions/index.js'
import { CardContainer, mapStateToProps} from './CardContainer.js'
import { mockCleanCakeShows } from '../../mockCleanData.js'
import TvShowCard from '../TvShowCard/TvShowCard.js'
import FavoriteCard from '../FavoriteCard/FavoriteCard.js'

describe('CardContainer', () => {
  let mockFavLocation
  let mockWatchedLocation
  let mockWatchListLocation
  let mockTrackedEpisodes
  let mockHomeLocation
  let mockFavoriteLocation

  beforeEach(() => {
    mockTrackedEpisodes = [{
      title: 'Cake Boss',
      tracked: {
        favorites: true,
        watched: true,
        watchlist: true
      }
    }]
    mockWatchedLocation = {
      pathname: '/watched'
    }
    mockFavoriteLocation = {
      pathname: '/favorites'
    }
    mockWatchListLocation = {
      pathname: '/watchlist'
    }
    mockHomeLocation = {
      pathname: '/'
    }
  })

  it('should match the snapshot', () => {
    const mockTvShows = []
    const wrapper = shallow(<CardContainer tvShows={ mockTvShows } location={ mockHomeLocation }/>)

    expect(wrapper).toMatchSnapshot()
  })

  it('should render two TvShowCards if the location is home', () => {
    const wrapper = shallow(<CardContainer tvShows={ mockCleanCakeShows } location={ mockHomeLocation }/>)
    const spySplitLocaton = jest.spyOn(wrapper.instance(), 'displayTvShows')
    
    wrapper.instance().forceUpdate()

    expect(wrapper.find(TvShowCard).length).toBe(2)
    expect(spySplitLocaton).toHaveBeenCalled()
  })

  it('should render one Favorite Card if the location is favorites', () => {
    const wrapper = shallow(<CardContainer trackedEpisodes={ mockTrackedEpisodes} tvShows={ mockCleanCakeShows } location={ mockFavoriteLocation }/>)
    const spySplitLocaton = jest.spyOn(wrapper.instance(), 'splitLocation')
    const spyTrackedEpisodes = jest.spyOn(wrapper.instance(), 'findTrackedEpisodes')

    wrapper.instance().forceUpdate()

    expect(wrapper.find(FavoriteCard).length).toEqual(1)
  })

  it('should render one Favorite Card if the location is watched', () => {
    const wrapper = shallow(<CardContainer trackedEpisodes={ mockTrackedEpisodes} tvShows={ mockCleanCakeShows } location={ mockWatchedLocation }/>)
    const spySplitLocaton = jest.spyOn(wrapper.instance(), 'splitLocation')
    const spyTrackedEpisodes = jest.spyOn(wrapper.instance(), 'findTrackedEpisodes')

    wrapper.instance().forceUpdate()

    expect(wrapper.find(FavoriteCard).length).toEqual(1)
  })

  it('should render one Favorite Card if the location is watchlist', () => {
    const wrapper = shallow(<CardContainer trackedEpisodes={ mockTrackedEpisodes} tvShows={ mockCleanCakeShows } location={ mockWatchListLocation }/>)
    const spySplitLocaton = jest.spyOn(wrapper.instance(), 'splitLocation')
    const spyTrackedEpisodes = jest.spyOn(wrapper.instance(), 'findTrackedEpisodes')

    wrapper.instance().forceUpdate()

    expect(wrapper.find(FavoriteCard).length).toEqual(1)
  })

  it('splitLocation should return a location without /', () => {
    const expected = 'favorites'
    const wrapper = shallow(<CardContainer trackedEpisodes={ mockTrackedEpisodes} tvShows={ mockCleanCakeShows } location={ mockWatchListLocation }/>)
    const result = wrapper.instance().splitLocation('/favorites')

    expect(result).toEqual(expected)
  })

  describe('mapStateToProps', () => {
    const mockState = {
      tvShows: mockCleanCakeShows,
      isLoading,
      hasErrored
    }
    const expected = {
      tvShows: mockCleanCakeShows
    }

    const result = mapStateToProps(mockState)

    expect(result).toEqual(expected)
  })
})