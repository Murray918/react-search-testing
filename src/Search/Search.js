import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {
	//set up initial state
	state = {
		value: ''
	}

    // events below
	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = event => {
        event.preventDefault()
        //this.props.preformSearch 
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
