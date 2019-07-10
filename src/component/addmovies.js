import React, { Component } from 'react'
import './addmovies.css' ;
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux'


 class Addmovies extends Component {
    render() {
        return (
            <div>
            <Form className={this.props.addmovie.display}>
                <Form.Group controlId="formGroupEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control onChange={this.props.titlechange} value={this.props.addmovie.title}type="text" placeholder="Enter your title" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                <Form.Label>Discription</Form.Label>
                <Form.Control type="text" onChange={this.props.discriptionchange} placeholder="Enter your discription" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" onChange={this.props.imagechange}  placeholder="Enter your image url" />
                </Form.Group>
                <Form.Label>stars rating</Form.Label>
                <p><input onChange={this.props.ratingchange} type="number" min="0" max="5"></input></p>
                <Button onClick={this.props.pushnew}  variant="primary">Done</Button>
                <Button onClick={this.props.cancel} variant="primary">Cancul</Button>
            </Form>
            </div>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return{
        titlechange :(e)=>dispatch({type:'TITLE_CHANGE',  data: e.target.value}),
        discriptionchange :(e)=>dispatch({type:'DISCRIPTION_CHANGE',  data: e.target.value}),
        imagechange :(e)=>dispatch({type:'IMAGE_CHANGE',  data: e.target.value}),
        pushnew :()=>dispatch({type:'PUSH_NEW'}),
        ratingchange :(e)=>dispatch({type:'RATING_CHANGE',  data: e.target.value}),
        cancel :()=>dispatch({type:'CANCEL'}),

        
}
}

function mapStateToProps (state) {
    return {
        addmovie:state
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Addmovies)
