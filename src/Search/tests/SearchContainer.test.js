import React from 'react'
import SearchContainer from '../SearchContainer'
import Search from '../Search'
import { shallow, mount } from 'enzyme'


jest.mock('./__mocks__/index.js')

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
	test('it should update the articles state', () => {
		const wrap = mount(<SearchContainer />)
		//first we expect it to be an empty array
		expect(wrap.state().articles).toEqual([])

		const { preformSearch } = wrap.find(Search).props()
        console.log(preformSearch())
        
		return preformSearch().then(() => {
			expect(wrap.state().articles).toHaveLength(10)
		})
	})
})
