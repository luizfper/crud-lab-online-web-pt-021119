import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurant={this.props.restaurant} restaurantId={this.props.restaurant.id}/>
        <Reviews restaurant={this.props.restaurant} reviews={this.props.reviews} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}
 const mapStateToProps = state => {
	 return {reviews: state.reviews}
 }

 const mapDispatchToProps = dispatch =>{
	 return {
		 addReview: (text, restaurantId) => dispatch({type: 'ADD_REVIEW', text: text, restaurantId: restaurantId}),
		 deleteReview: id => dispatch({type: 'DELETE_REVIEW', id: id})
		}
 }


export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
