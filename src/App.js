import {fetchFirst} from "./Fetch.js";
import RedditPost from "./RedditPost.js";
import square, {divide} from './Utils.js';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      posts: ['one', 'two']
    };
  }  

  componentDidMount() {
    fetch('https://www.reddit.com/r/reactjs.json').then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          posts: result.items
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
    console.log(divide(6) ); // 4, 1

  }    
  render() {

    return (
      <div className="App">
        <header className="App-header">
     
          <h1 className="App-title"></h1>
        </header>
        <p className="App-intro">
          <ul>
            {this.state.posts.map(post =>
              <RedditPost {...post}/>
            )}
          </ul>          
        </p>
      </div>
    );
  }
}

export default App;