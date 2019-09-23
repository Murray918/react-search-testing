import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {
	//set up initial state
	state = {
		value: ''
	}

    // events below
	handleChange = event => {
		let value = event.target.value
		this.setState({ value })
		this.props.preformSearch(value)
	}

	handleSubmit = event => {
        event.preventDefault()
	}
	render() {
		return (
			<div>
				<h1>Search Application</h1>
				<form className="search-form" onSubmit={this.handleSubmit}>
					<input 
                        onChange={this.handleChange} 
                        name="value" 
                        type="text"
						value={this.state.value}
					/>
				</form>
			</div>
		)
	}
}

export default Search

Search.propTypes = {
	preformSearch: PropTypes.func
}
