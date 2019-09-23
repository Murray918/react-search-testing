import React, {Component} from 'react' 
import Search from './Search'

// here is the container for the search component it stores most of the logic pertaining to the API
class SearchContainer extends Component {
    state = {
        articles = []
    }

    preformSearch = event => {
        const articles = await fetchArticles(event)
        this.setState({articles : articles.data.response.results})
    }
    render() {
        <Search 
            preformSearch = {this.preformSearch}
            articles = {this.state.articles}
        />
    }
}

export default SearchContainer

