import React, { Component } from 'react';
import Photo from './Photo';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default class PhotoGrid extends Component {
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => <Photo {...this.props} key={post.id} i={i} post={post}/>)}
      </div>
    );
  }
}

// PhotoGrid.propTypes = {

// };
