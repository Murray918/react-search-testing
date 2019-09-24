import React, { Component } from 'react'
import Search from './Search'
import { fetchArticles } from './api_service'

// here is the container for the search component it stores most of the logic pertaining to the API
class SearchContainer extends Component {
	state = {
		articles: []
	}
	// make our api call and set the state
	preformSearch = async event => {
		try {
			const articles = await fetchArticles(event)
			this.setState({ articles: articles })
		} catch (error) {
			console.error(error)
		}
	}
	render() {
		return (
			<Search
				preformSearch={this.preformSearch}
				articles={this.state.articles}
			/>
		)
	}
}
export default SearchContainer
