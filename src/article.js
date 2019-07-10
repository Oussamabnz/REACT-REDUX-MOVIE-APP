import React, { Component } from 'react'
import Movies from './component/movies.js'
import Search from './component/search.js'
import 'react-rater/lib/react-rater.css'
import Addmovies from './component/addmovies.js'


export default class Article extends Component {
    

  render() {
 
      
    return (<div>

      <Search/>
      <Addmovies/>
      <Movies/>
      </div>
    )
  }
}
