import React, { Component } from 'react'
import './movies.css' ;
import Card from 'react-bootstrap/Card'
import Rater from 'react-rater'
import { connect } from 'react-redux'

class Movies extends Component {
    render() {
        return (
         
    <div className="content">
         { this.props.movieslist.maps.map(el =>{ if(  el.title.search(this.props.movieslist.search.trim())> -1  ){
            if(this.props.movieslist.idsearch==el.stars ||   this.props.movieslist.idsearch==="")
            return <Card className="my-card"  >
            <Rater total={5} rating={el.stars} />
            <Card.Img className ="img-size" variant="top" src={el.image} />
            <Card.Body> 
                <Card.Title>{el.title}</Card.Title>
                <Card.Text>{el.discription}</Card.Text>
            </Card.Body>
        </Card>}})}


        <Card className="my-card" onClick={this.props.myform} >
            <Card.Img variant="top" src="http://pngimg.com/uploads/plus/plus_PNG29.png" />
            <Card.Body> 
                <Card.Title>ADD NEW ARTICLE</Card.Title>
            </Card.Body>
        </Card>
    </div>
        )
    }
}
function mapDispatchToProps (dispatch) {
    return{
        myform :()=>dispatch({type:'MY_FORM'}),
        
}
}
function mapStateToProps (state) {
    return {
        movieslist:state
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Movies)

