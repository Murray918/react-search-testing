import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {
	//set up initial state
	state = {
		value: ''
	}
	// deconstruct props

	// events below
	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault()
	}
	render() {
		return (
			<div>
				<h1>Search Application</h1>
				<form className="search-form" onSubmit={handleSubmit}>
					<input 
                        onChange={handleChange} 
                        name="value" 
                        type="text"
                        >
						{this.state.value}
					</input>
				</form>
			</div>
		)
	}
}

export default Search

Search.propTypes = {
	preformSearch: PropTypes.func
}
