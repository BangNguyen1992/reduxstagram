import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Comments extends Component {
  static propTypes = {
    postComments: PropTypes.array
  }

  commentForm = React.createRef();
  author = React.createRef();
  comment = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    const { postId } = this.props.params;
    const author = this.author.current.value;
    const comment = this.comment.current.value;

    this.props.addComment(postId, author, comment);
    this.commentForm.current.reset();
  }

  render() {
    return (
      <div className="comment">
        {this.props.postComments.map((comment, i) => {
          return (
            <div className="comment" key={i}>
              <p>
                <strong>{comment.user}</strong>
                {comment.text}
                <button className="remove-comment" onClick={() => this.props.removeComment(this.props.params.postId, i)}>&times;</button>
              </p>
            </div>
          )
        })}

        <form ref={this.commentForm} className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref={this.author} placeholder="author"></input>
          <input type="text" ref={this.comment} placeholder="comment"></input>
          <input type="submit" hidden></input>
        </form>
      </div>
    );
  }
}
