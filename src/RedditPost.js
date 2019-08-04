import React from "react";
import PropTypes from 'prop-types';



class RedditPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      id: props.id
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps);
  }

  render() {
      return(
            <li key={this.state.id}>{this.state.title}</li>
      );
    }
  }


RedditPost.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string
};

RedditPost.defaultProps = {
  id: null,
  title: ""

};

export default RedditPost;