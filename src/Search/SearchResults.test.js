import React from 'react'
import { shallow } from 'enzyme'
import SearchResults from './SearchResults'

const mockArticles = [
	{
		webUrl: 'www.google.com',
		webTitle: "Lets freaking party y'all!!!!"
	}
]

describe('Search Results', () => {
	test('renders', () => {
		const wrap = shallow(<SearchResults articles={mockArticles} />)
		expect(wrap).toMatchSnapshot()
    })
    
	test('returns the default empty array when there is no data', () => {
		const wrap = shallow(<SearchResults />)
		expect(wrap).toMatchSnapShot()
    })

})
