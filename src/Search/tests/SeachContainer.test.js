import React from 'react'
import SearchContainer from '../SeachContainer'
import Search from '../Search'
import { shallow } from 'enzyme'

describe('Search Container Component', () => {
    test('it render properly', () => {
        const wrap = shallow(<SearchContainer />)
        expect(wrap.exists()).toBe(true)
    }) 
})