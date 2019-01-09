import React from 'react'
import { shallow } from 'enzyme'
import { MainPage, mapStateToProps } from './MainPage.js'
import { FeaturedTvShow } from '../../components/FeaturedTvShow/FeaturedTvShow.js'
import CardContainer from '../CardContainer/CardContainer.js'
import { mockCleanCakeShows } from '../../mockCleanData.js'
import { Loading } from '../../components/Loading/Loading.js'

describe('MainPage', () => {
  it('should match the snapshot', () => {
    const mockError = false
    const mockLoading = false
    const wrapper = shallow(<MainPage tvShows={ mockCleanCakeShows } isLoading={ mockLoading } hasErrored={ mockError }/>)

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a FeaturedTvShow and CardContainer component if there are tvShows', () => {
    const wrapper = shallow(<MainPage tvShows={ mockCleanCakeShows } />)

    expect(wrapper.find(FeaturedTvShow).length).toEqual(1)
    expect(wrapper.find(CardContainer).length).toEqual(1)
  })

  it('should not render FeaturedTvShow or CardContainer if there are no tvShows', () => {
    const wrapper = shallow(<MainPage />)

    expect(wrapper.find(FeaturedTvShow).length).toEqual(0)
    expect(wrapper.find(CardContainer).length).toEqual(0)
  })

  it('should render a Loading component if isLoading is true', () => {
    const mockLoading = true
    const wrapper = shallow(<MainPage isLoading={mockLoading} />)

    expect(wrapper.find(Loading).length).toEqual(1)
  })

  it('should render a div component if hasErrored is true', () => {
    const mockErrored = true
    const wrapper = shallow(<MainPage hasErrored={mockErrored} />)

    expect(wrapper.find('div').length).toEqual(1)
  })


  describe('mapStateToProps', () => {
    it('should return an object with tvShows as a key', () => {
      const mockState = {
        tvShows: mockCleanCakeShows,
        isLoading: false,
        hasErrored: false
      }
      const expected = {
        tvShows: mockCleanCakeShows,
        isLoading: false,
        hasErrored: false
      }
      
      const result = mapStateToProps(mockState)

      expect(result).toEqual(expected)
    })
  })
})