import React, { Component } from 'react';
import AstronomyCard from './AstronomyCard';

class AstronomyContainer extends Component {
  constructor() {
    super();

    this.state = {
      astronomy: []
    }
  }

  componentDidMount() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=cnvbe0cPs2FfVtm4BSKqWFxgdKa4i6EOrl8OCsxD')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          astronomy: responseData
        });
      });
  }

  render() {
    const { astronomy } = this.state;

    return(
      <AstronomyCard data={ astronomy } />
    )
  }
}

export default AstronomyContainer;
