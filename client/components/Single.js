import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';


const Single = props => {
  const postId = props.params.postId;
  const i = props.posts.findIndex(post => post.code === postId);
  const post = props.posts[i];
  const postComments = props.comments[postId] || [];

  return (
    <div className="single-photo">
      <Photo i={i} post={post} {...props} />
      <Comments postComments={postComments} {...props}/>
    </div>
  );
};

Single.propTypes = {

};

export default Single;
