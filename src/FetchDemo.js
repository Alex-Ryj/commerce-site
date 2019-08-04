import React from 'react';
import {fetchFirst} from './Fetch'
import ReactDOM from 'react-dom';
import axios from 'axios';

class FetchDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    
    const search = ReactDOM.findDOMNode(this).parentNode.getAttribute("search")
    
    axios.get('http://www.reddit.com/r/' + search +'.json')
    .then(res => {
      const posts = res.data.data.children.map(obj => obj.data);
      this.setState({ posts: posts,
                     loading: false });
    });   
  }

  renderLoading() {
    return <div>Loading...</div>;
  }

  renderError() {
    return (
      <div>
        Uh oh: {this.state.error.message}
      </div>
    );
  }

  renderPosts() {
    if(this.state.error) {
      return this.renderError();
    }

    return (
      <ul>
        {this.state.posts.map(post =>
          <li key={post.id}>{post.title}</li>
        )}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h1>{`/r/${this.props.subreddit}`}</h1>
        {this.state.loading ?
          this.renderLoading()
          : this.renderPosts()}
      </div>
    );
  }
}

export default FetchDemo;

