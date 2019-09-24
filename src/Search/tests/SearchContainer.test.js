import React from 'react'
import SearchContainer from '../SearchContainer'
import Search from '../Search'
import { shallow, mount } from 'enzyme'

describe('Search Container Component', () => {
    test('it render properly', () => {
        const wrap = shallow(<SearchContainer />)
        expect(wrap.exists()).toBe(true)
    }) 
    test('Search container should render the Search component', () => {
        const wrap = mount(<SearchContainer />)
        console.log(wrap.children(Search).length)
        expect(wrap.children(Search).length).toEqual(1)
    })
})