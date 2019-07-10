import React, { Component } from 'react'
import './search.css'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Rater from 'react-rater'
import { connect } from 'react-redux'

 class Search extends Component {
    render() {
        return (
            
    <div>
        <InputGroup className="mb-3">
            <FormControl placeholder="Search movie" onChange={this.props.searchchange} />
            <InputGroup.Append>
            <InputGroup.Text id="basic-addon2">Search movie</InputGroup.Text>
            </InputGroup.Append>
            <div className="s-stars">
            <Rater  total={5} rating={this.props.searchmovies} onRate={({rating}) => {this.props.ratingsearch(rating)}} />
            </div>
      </InputGroup>
    </div>
            
        )
    }
}
function mapDispatchToProps (dispatch) {
    return{
        searchchange :(e)=>dispatch({type:'SEARCH_CHANGE', data: e.target.value}),
        ratingsearch :(e)=>dispatch({type:'RATING_SEARCH', data: e}),

}
}
function mapStateToProps (state) {
    return {
        searchmovies:state.idsearch
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search)