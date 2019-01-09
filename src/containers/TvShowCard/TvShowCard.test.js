import React from 'react'
import { TvShowCard, mapDispatchToProps } from './TvShowCard.js'
import { mockCleanCakeShows } from '../../mockCleanData.js'
import { fetchTvShowInfo } from '../../thunks/fetchTvShowInfo'
import { shallow } from 'enzyme'

jest.mock('../../thunks/fetchTvShowInfo')

describe('TvShowCard', () => {
  it('should return an article with an image, h3, 2 p elements and to match the snapshot', () => {
    const mockFetch = jest.fn()
    const wrapper = shallow(<TvShowCard title={'Cake Boss'} network={'FOX'} img={'www.img.com'} id={1} fetchShowInfo={ mockFetch }/>)

    expect(wrapper.find('article').length).toEqual(1)
    expect(wrapper.find('h3').length).toEqual(1)
    expect(wrapper.find('img').length).toEqual(1)
    expect(wrapper.find('p').length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the correct params', () => {
      const mockDispatch = jest.fn()
      const mockId = 1

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchShowInfo(mockId)

      expect(mockDispatch).toHaveBeenCalledWith(fetchTvShowInfo(mockId))
    })
  })  
})