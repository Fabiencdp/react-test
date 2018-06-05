import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetch } from './actions';

class Home extends React.PureComponent {

  componentDidMount() {
    this.props.dispatch(fetch());
  }

  renderPostsList = () => {
    return this.props.posts.map(post => {
      return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
    });
  };

  render() {
    return (
      <div>
        <p>This is the home page</p>

        {this.props.error &&
          <div className="notification is-danger">
            We are really sorry, an error occurred :( <br/> Error code: {this.props.error}
          </div>
        }

        {!this.props.error &&
          <ul>
            {this.renderPostsList()}
          </ul>
        }
      </div>
    );
  }
}

export default connect(({ home }) => ({
  posts: home.posts,
  error: home.error
}))(Home);