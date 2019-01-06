import { fetchTvShowInfo } from '../fetchTvShowInfo.js'
import { isLoading, hasErrored, tvShowFetchSuccess } from '../../actions/index.js'

const fetchCall = require('../../APICalls/fetchCall.js')
const tvShowCleaner = require('../../cleaners/tvShowCleaner')

describe('fetchTvShowInfo', () => {
  let mockId
  let mockDispatch

  beforeEach(() => {
    mockId = 1
    mockDispatch = jest.fn()
  })
  it('should call dispatch with the correct params', async () => {
    const thunk = fetchTvShowInfo(mockId)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('should invoke fetchCall with tvShowUrl', async () => {
    const mockUrl = 'http://api.tvmaze.com/shows/1/episodes'
    const thunk = fetchTvShowInfo(mockId)
    fetchCall.fetchCall = jest.fn()

    await thunk(mockDispatch)

    expect(fetchCall.fetchCall).toHaveBeenCalledWith(mockUrl)
  })

  it('should call dispatch with isLoading(false)', async () => {
    const thunk = fetchTvShowInfo(mockId)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

  it('should call tvShowCleaner', async () => {
    tvShowCleaner.tvShowCleaner = jest.fn()
    const thunk = fetchTvShowInfo(mockId)

    await thunk(mockDispatch)

    expect(tvShowCleaner.tvShowCleaner).toHaveBeenCalled()
  })

  it('should call dispatch with tvShowFetchSuccess', async () => {
    const thunk = fetchTvShowInfo(mockId)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(tvShowFetchSuccess())
  })

  it('should call dispatch with hasErrored if hasErrored(true) if fetchCall returns an error', async () => {
    fetchCall.fetchCall = jest.fn().mockImplementation(() => {
      throw new Error('Something went wrong')
    })

    const thunk = fetchTvShowInfo(mockId)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored(true))
  })
})