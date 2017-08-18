import React, { Component } from 'react'
import AstronomyCard from './AstronomyCard'
import axios from 'axios'

class AstronomyContainer extends Component {
	constructor() {
		super()

		this.state = {
			astronomy: []
		}
	},

	componentDidMount() {
		const API_KEY  = 'cnvbe0cPs2FfVtm4BSKqWFxgdKa4i6EOrl8OCsxD'
		const URL = 'https://api.nasa.gov/planetary/apod?api_key=' + API_KEY

		axios.get(URL)
			.then(response => {
				this.setState({
					astronomy: response.data
				})

				console.log(this.state.astronomy)
			})
			.catch(error => {
				console.log(error, 'failed')
			})

	}

	render(
		const { astronomy } = this.state
		return(
			<AstronomyCard data={ astronomy } />
			<div />
		)
	)
}

export default AstronomyContainer