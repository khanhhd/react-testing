import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
  state = { comment: ''};
  handleChange = event => {
    this.setState({comment: event.target.value});
  }

  handleSubmitForm = event => {
    event.preventDefault();
    this.props.saveComment(this.state.comment)
    this.setState({comment: ''});
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmitForm.bind(this)}>
          <h4> Add comment </h4>
          <textarea onChange={this.handleChange.bind(this)} value={this.state.comment} />
          <div>
            <button>Submit comment </button>
          </div>
        </form>
        <button className='fetch-comments' onClick={this.props.fetchComments}>Fetch comments</button>
      </div>
    );
  }
}

export default connect(null, actions)(CommentBox);
