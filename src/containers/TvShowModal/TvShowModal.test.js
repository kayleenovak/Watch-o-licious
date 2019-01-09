import React from 'react'
import { shallow } from 'enzyme'
import { TvShowModal, mapStateToProps, mapDispatchToProps } from './TvShowModal.js'
import { fetchShowInfo } from '../../thunks/fetchTvShowInfo.js'
import { removeShow } from '../../actions/index.js'
import { mockCleanCakeShows } from '../../mockCleanData.js'
import Episode from '../../components/Episode/Episode.js'
import { Loading } from '../../components/Loading/Loading.js'

describe('TvShowModal', () => {
  let emptyWrapper
  let wrapper
  let mockFetch
  let mockRemoveShow
  let mockHistory
  let mockEmptyShows
  let mockTvShows
  let mockTvEpisodes

  beforeEach(() => {
    mockHistory = []
    mockEmptyShows = []
    mockTvShows = mockCleanCakeShows
    mockTvEpisodes = [{
      season: 1,
      episodes: [{
        title: 'Cakes',
        episode: 1,
        runtime: 30,
        summary: 'A show about cakes',
        airdate: '2018-12-12',
        favorite: {
          favorite: false,
          watchlist: false,
          watched: false
        }
      }]
    }]
    mockFetch = jest.fn()
    mockRemoveShow = jest.fn()

    wrapper = shallow(<TvShowModal history={mockHistory} id={921} tvShowEpisodes={mockTvEpisodes} tvShows={mockTvShows} fetchShowInfo={mockFetch} removeShow={mockRemoveShow} />)
    emptyWrapper = shallow(<TvShowModal tvShows={mockEmptyShows} fetchShowInfo={mockFetch} removeShow={mockRemoveShow} />)
  })

  it('should return an empty div if there are no tvShows in props', () => {

    expect(emptyWrapper.find(Loading).length).toEqual(1)
  })

  it('should render section(2) with h3(2), p(1), button(1), div(8)', () => {

    expect(wrapper.find('section').length).toEqual(2)
    expect(wrapper.find('h3').length).toEqual(2)
    expect(wrapper.find('p').length).toEqual(1)
    expect(wrapper.find('button').length).toEqual(1)
    expect(wrapper.find('div').length).toEqual(8)
  })

  it('should invoke findTvShow, displaySeasons, and displayEpisodes if there are tvShows and episodes', () => {
    const spyFindTvShow = jest.spyOn(wrapper.instance(), 'findTvShow')
    const spyDisplayEpisodes = jest.spyOn(wrapper.instance(), 'displayEpisodes')
    const spyDisplaySeasons = jest.spyOn(wrapper.instance(), 'displaySeasons')
    
    wrapper.instance().forceUpdate()

    expect(spyFindTvShow).toHaveBeenCalled()
  })

  it('should invoke collapseModal on click of the button', () => {
    const spyCollapseModal = jest.spyOn(wrapper.instance(), 'collapseModal')

    wrapper.instance().forceUpdate()
    wrapper.find('.collapse-modal').simulate('click')

    expect(spyCollapseModal).toHaveBeenCalled()
  })

  it('should invoke fetchShowInfo on componentDidMount', () => {

    expect(mockFetch).toHaveBeenCalled()
  })

  it('findTvShow should return the matching show', () => {
    const result = wrapper.instance().findTvShow()

    expect(result).toEqual(mockCleanCakeShows[0])
  })

  it('updateSeason should update state', () => {
    const mockEvent = {
      preventDefault: () => {},
      target: {
        innerText: 1
      }
    }

    wrapper.instance().updateSeason(mockEvent)

    expect(wrapper.state('season')).toEqual(1)
  })

  it('displaySeasons to return an h5 for each season', () => {
    const mockTvEpisodes = [{
      season: 1,
      episodes: [{
        title: 'Cakes',
        episode: 1,
        runtime: 30,
        summary: 'A show about cakes',
        airdate: '2018-12-12',
        favorite: {
          favorite: false,
          watchlist: false,
          watched: false
        }
      }]
    },
    {
      season: 2,
      episodes: [{
        title: 'Cakes',
        episode: 1,
        runtime: 30,
        summary: 'A show about cakes',
        airdate: '2018-12-12',
        favorite: {
          favorite: false,
          watchlist: false,
          watched: false
        }
      }]
    }]
    wrapper = shallow(<TvShowModal history={mockHistory} id={921} tvShowEpisodes={mockTvEpisodes} tvShows={mockTvShows} fetchShowInfo={mockFetch} removeShow={mockRemoveShow} />)

    expect(wrapper.find('h5').length).toEqual(2)
  })

  it('displayEpisodes should return an episode for each episode', () => {

    expect(wrapper.find(Episode).length).toEqual(1)
  })

  it('collapseModal should invoke removeShow and push / into the history array', () => {
    const expected = ['/']

    wrapper.instance().collapseModal()

    expect(mockRemoveShow).toHaveBeenCalled()
    expect(wrapper.instance().props.history).toEqual(expected)
  })

  describe('mapStateToProps', () => {
    it('should return an object wih tvShows, and tvShowEpisodes', () => {
      const mockShows = [{title: 'Cake Boss'}, {title: 'Cakes'}]
      const mockState = {
        isLoading: false,
        hasErrored: false,
        tvShows: mockShows,
        tvShowEpisodes: []
      }
      const expected = {
        tvShows: mockShows,
        tvShowEpisodes: []
      }

      const result = mapStateToProps(mockState)

      expect(result).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the correct params', () => {
      const mockDispatch = jest.fn()
      
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchShowInfo(1)
      mappedProps.removeShow()

      expect(mockDispatch).toHaveBeenCalledTimes(2)
    })
  })
})