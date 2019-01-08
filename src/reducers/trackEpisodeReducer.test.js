import { trackEpisodeReducer } from './trackEpisodeReducer'

const toggleTracked = require('../helpers/handleToggleTracked.js')

describe('trackEpisodeReducer', () => {
  let mockEpisode

  beforeEach(() => {
    mockEpisode = {
      title: 'Cake Wars',
      url: 'www.cakewars.com',
      tracked: {
        favorites: false,
        watched: false,
        watchlist: false
      }
    }
  })
  it('should return a new array with the new tracked object if action type is "ADD_TO_TRACKED', () => {
    const mockState = []
    const mockAction = {
      type: 'ADD_TO_TRACKED',
      episode: mockEpisode
    }
    const expected = [mockEpisode]

    const result = trackEpisodeReducer(mockState, mockAction)

    expect(result).toEqual(expected)
  })

  it('should return a new state with the episode object removed from state if action type is REMOVE_FROM_TRACKED', () => {
    const expected = []
    const mockAction = {
      type: 'REMOVE_FROM_TRACKED',
      episode: mockEpisode
    }
    const mockState = [mockEpisode]

    const result = trackEpisodeReducer(mockState, mockAction)

    expect(result).toEqual(expected)
  })

  it('should call toggleTracked with the correct params if action type is TOGGLE_FAVORITE', () => {
    const mockAction = {
      type: 'TOGGLE_FAVORITE',
      episode: mockEpisode
    }
    const mockState = [mockEpisode]
    toggleTracked.toggleTracked = jest.fn()

    trackEpisodeReducer(mockState, mockAction)

    expect(toggleTracked.toggleTracked).toHaveBeenCalledWith(mockState, mockAction, 'favorites')
  })

  it('should return a new state with the episode favorite toggled if action type is TOGGLE_WATCHED', () => {
    const mockAction = {
      type: 'TOGGLE_WATCHED',
      episode: mockEpisode
    }
    const mockState = [mockEpisode]
    toggleTracked.toggleTracked = jest.fn()

    trackEpisodeReducer(mockState, mockAction)

    expect(toggleTracked.toggleTracked).toHaveBeenCalledWith(mockState, mockAction, 'watched')
  })

  it('should return a new state with the episode favorite toggled if action type is TOGGLE_WATCH_LIST', () => {
    const mockAction = {
      type: 'TOGGLE_WATCH_LIST',
      episode: mockEpisode
    }
    const mockState = [mockEpisode]
    toggleTracked.toggleTracked = jest.fn()

    trackEpisodeReducer(mockState, mockAction)

    expect(toggleTracked.toggleTracked).toHaveBeenCalledWith(mockState, mockAction, 'watchlist')
  })

  it('should return a default state if state is undefined and the aciton is an empty object', () => {
    const mockAction = {}
    const expected = []

    const result = trackEpisodeReducer(undefined, mockAction)

    expect(result).toEqual(expected)
  })
})