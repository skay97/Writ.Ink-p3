import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index';

class PostList extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderTags(tags) {
    return tags.map(tag => {
      return <span className="badge badge-info span-with-margin" key={tag}>{tag}</span>;
    });
  }

  renderPostSummary(post) {
    return (
      <div key={post._id}>
        <h3>
          <Link className="link-without-underline" to={`/posts/${post._id}`}>
            {post.title}
          </Link>
        </h3>
        {this.renderTags(post.categories)}
        <span className="span-with-margin text-grey"> • </span>
        <Link to={`/profile/${post.authorId}`}>
          <span className="span-with-margin text-grey"> {post.authorName}</span>
        </Link>

        {/* In profile page component*/}
        {/* <Link to={`/subscribe/${post.authorId}`}>
        <button>Subscribe</button>
        </Link> */}
        {/* Make an axios post request to do a mongo $push into the user model's arrray */}
        {/* Need to make a post request on the backend to actually write it to the db */}
        {/* In profile page component*/}

        <span className="span-with-margin text-grey"> • </span>
        <span className="span-with-margin text-grey">{new Date(post.time).toLocaleString()}</span>
        <hr />
      </div>
    );
  }

  render() {
    // console.log(this.props.posts);
    return (
      <div className="post">
        <Link className="btn btn-primary mb-5" to={'/posts/new'}>Publish A New Post</Link>
        {_.map(this.props.posts, post => {
          return this.renderPostSummary(post);
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostList);