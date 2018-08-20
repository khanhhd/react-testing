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
    debugger
    this.props.saveComment(this.state.comment)
    this.setState({comment: ''});
  }
  render(){
    return(
      <form onSubmit={this.handleSubmitForm.bind(this)}>
        <h4> Add comment </h4>
        <textarea onChange={this.handleChange.bind(this)} value={this.state.comment} />
        <div>
          <button>Submit comment </button>
        </div>
      </form>
    );
  }
}

export default connect(null, actions)(CommentBox);
