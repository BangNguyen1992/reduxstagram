function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      // return new state with new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }]

    case 'REMOVE_COMMENT':
      // return new state without delete comment
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]

    default:
      return state;
  }
}

function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      ...state, //take the current state
      [action.postId]: postComments(state[action.postId], action) // overwrite the post with new one
    }
  }
  return state;
}

export default comments;