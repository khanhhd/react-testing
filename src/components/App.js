import React, { Component } from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom';
import * as actions from '../actions'

class App extends Component {
  renderButton(){
    if (this.props.auth) {
      return(
        <button onClick={()=>this.props.changeAuth(false)}>
          Sign out
        </button>
      )
    } else {
      return(
        <button onClick={()=>this.props.changeAuth(true)}>
          Sign In
        </button>
      )
    }
  }
  renderHeader(){
    return(
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/post">Post a comment</Link></li>
        <li><Link to="/">{this.renderButton()}</Link></li>
      </ul>
    )
  }
  render(){
    return(
      <div>
        {this.renderHeader()}
        <Route path='/post' component={CommentBox} />
        <Route path='/' exact component={CommentList} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {auth: state.auth}
}

export default connect(mapStateToProps, actions)(App)
