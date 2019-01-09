import { fetchTvShows } from '../fetchTvShows.js'
import { isLoading, hasErrored, dataFetchSuccess } from '../../actions/index.js'

const tvShowsCleaner = require('../../cleaners/tvShowsCleaner.js')
const fetchCall = require('../../APICalls/fetchCall')

describe('fetchTvShows', () => {
  let mockDispatch
  let thunk
  let mockCakeUrl
  let mockBakeUrl
  let mockBakingUrl

  beforeEach(() => {
    mockDispatch = jest.fn()
    thunk = fetchTvShows()
    mockCakeUrl = 'http://api.tvmaze.com/search/shows?q=cake'
    mockBakeUrl = 'http://api.tvmaze.com/search/shows?q=bake'
    mockBakingUrl = 'http://api.tvmaze.com/search/shows?q=baking'
  })

  it('should dispatch isLoading(true)', async () => {
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('should call fetchCall with the correct params', async () => {
    fetchCall.fetchCall = jest.fn(() => [])
    await thunk(mockDispatch)

    expect(fetchCall.fetchCall).toHaveBeenCalledWith(mockCakeUrl)
    expect(fetchCall.fetchCall).toHaveBeenCalledWith(mockBakeUrl)
    expect(fetchCall.fetchCall).toHaveBeenCalledWith(mockBakingUrl)
  })

  it('should dispatch isLoading(false', async () => {
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

  it('should call tvShowsCleaner', async () => {
    tvShowsCleaner.tvShowsCleaner = jest.fn()
    
    await thunk(mockDispatch)

    expect(tvShowsCleaner.tvShowsCleaner).toHaveBeenCalled()
  })

  it('should call dispatch with dataFetchSuccess', async () => {
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(dataFetchSuccess())
  })

  it('should call dispatch with hasErrored(true) if there is an error', async () => {
    fetchCall.fetchCall = jest.fn().mockImplementation(() => {
      throw new Error('Something went wrong');
    })
    
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored(true))
  })  
})
