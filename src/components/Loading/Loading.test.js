import React from 'react'
import { Loading } from './Loading.js'
import { shallow } from 'enzyme'

describe('Loading', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Loading />)
  })

  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot()
  })

  it('should render 4 NavLinks', () => {
    expect(wrapper.find('section').length).toEqual(1)
    expect(wrapper.find('img').length).toEqual(1)
    expect(wrapper.find('h2').length).toEqual(1)
  })
})