import React from 'react'
import { FeaturedTvShow, mapStateToProps } from './FeaturedTvShow.js'
import { shallow } from 'enzyme'
import { mockCleanCakeShows } from '../../mockCleanData.js'

describe('FeaturedTvShow', () => {
  it('should render a section with an h3, 4 p, and 1 image', async () => {
    const featuredTvShow = [{
        id: 921,
        title: 'Cake Boss',
        runtime: 30,
        premiered: '2009-05-25',
        schedule: {
          'time': '21:00',
          'days': [
            'Monday'
          ]
        },
        rating: null,
        network: 'TLC',
        summary: 'Cake Boss is a popular docu-series following beloved baker Buddy Valastro, his larger-than-life family and burgeoning businesses.',
        image: "http://static.tvmaze.com/uploads/images/medium_portrait/6/16129.jpg"
    }]
    const wrapper = shallow(<FeaturedTvShow tvShows={ featuredTvShow } />)

    expect(wrapper.find('section').length).toEqual(1)
    expect(wrapper.find('h3').length).toEqual(1)
    expect(wrapper.find('p').length).toEqual(4)
    expect(wrapper.find('img').length).toEqual(1)
  })

  it('should render a div if there is not a featuredTvShow', () => {
    const wrapper = shallow(<FeaturedTvShow />)

    expect(wrapper.find('div').length).toEqual(1)
  })

  describe('componentDidMount', () => {
    it('should fire findRandomMovie', () => {
    const wrapper = shallow(<FeaturedTvShow tvShows={ mockCleanCakeShows } />)
    wrapper.findRandomMovie = jest.fn()

    expect(wrapper.findRandomMovie).toHaveBeenCalled
    })

    it('should not fire findRandomMovie if there are no tvShows in props', () => {
      const wrapper = shallow(<FeaturedTvShow />)
      wrapper.findRandomMovie = jest.fn()

      expect(wrapper.findRandomMovie).not.toHaveBeenCalled
    })
  })

  describe('findRandomMovie', () => {
    it('should set state with a featuresTvShow object', () => {
      const mockTvShows = [{
        id: 921,
        title: 'Cake Boss',
        runtime: 30,
        premiered: '2009-05-25',
        schedule: {
          'time': '21:00',
          'days': [
            'Monday'
          ]
        },
        rating: null,
        network: 'TLC',
        summary: 'Cake Boss is a popular docu-series following beloved baker Buddy Valastro, his larger-than-life family and burgeoning businesses.',
        image: "http://static.tvmaze.com/uploads/images/medium_portrait/6/16129.jpg"
      }]
      const expected = {
        id: 921,
        title: 'Cake Boss',
        runtime: 30,
        premiered: '2009-05-25',
        schedule: {
          'time': '21:00',
          'days': [
            'Monday'
          ]
        },
        rating: null,
        network: 'TLC',
        summary: 'Cake Boss is a popular docu-series following beloved baker Buddy Valastro, his larger-than-life family and burgeoning businesses.',
        image: "http://static.tvmaze.com/uploads/images/medium_portrait/6/16129.jpg"
      }
      const wrapper = shallow(<FeaturedTvShow tvShows={ mockTvShows } />)

      wrapper.instance().findRandomMovie()

      expect(wrapper.state().featuredTvShow).toEqual(expected)
    })
  })
})