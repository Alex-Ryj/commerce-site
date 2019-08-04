import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Overlay from 'react-bootstrap/Overlay';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';

class ExampleTootip extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleClick = ({ target }) => {
        this.setState(s => ({ target, show: !s.show }));
      };
  
      this.state = {
        show: false,
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
        <div class="bootstrap-iso">
        <ButtonToolbar>
          <Button onClick={this.handleClick}>Holy guacamole!</Button>
  
          <Overlay
            show={this.state.show}
            target={this.state.target}
            placement="bottom"
            container={this}
            containerPadding={20}
          >
            <Popover id="popover-contained" title="Popover bottom">
            <div>     
        {this.state.loading ?
          this.renderLoading()
          : this.renderPosts()}
      </div>
            </Popover>
          </Overlay>
        </ButtonToolbar>
        </div>
      );
    }
  }
  
export  default  ExampleTootip;