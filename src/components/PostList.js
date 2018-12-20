import React from 'react';
import { connect } from 'react-redux';

import { fetchPostsAndUsers } from '../actions';
import AuthorInfo from './AuthorInfo';

class PostList extends React.Component {

  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map((post) => {
        return (
          <div className="ui item" key={post.id} style={{padding: '1%'}}>
            <i className="large middle aligned icon user" />
            <div className="content">
              <div className="description">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
              <AuthorInfo author={post.userId}/>
            </div>
          </div>

        );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {posts: state.posts};
}

export default connect(mapStateToProps,
  {fetchPostsAndUsers: fetchPostsAndUsers})
  (PostList);
