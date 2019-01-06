import React from 'react'
import FeaturedTvShow from './FeaturedTvShow.js'
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
    const wrapper = shallow(<FeaturedTvShow {...featuredTvShow } />)

    expect(wrapper.find('section').length).toEqual(1)
    expect(wrapper.find('article').length).toEqual(1)
    expect(wrapper.find('h3').length).toEqual(1)
    expect(wrapper.find('p').length).toEqual(4)
    expect(wrapper.find('img').length).toEqual(1)
  })
})