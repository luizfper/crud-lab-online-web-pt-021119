import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

	state = {
		text: ''
	}

	handleOnChange = event => {
		this.setState({text: event.target.value})
	}

	handleSubmit = event => {
		event.preventDefault()
		this.props.addReview(this.state.text, this.props.restaurant.id)
	}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
					<input type='text'value={this.state.text} onChange={this.handleOnChange}/>
					<input type='submit'/>

				</form>
      </div>
    );
  }
};

export default ReviewInput;
