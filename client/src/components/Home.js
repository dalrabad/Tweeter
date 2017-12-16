import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import PostForm from './PostForm'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Home extends Component {

  state = {posts: []}

componentDidMount() {
    
  axios.get('/api/posts')
    .then( res => this.setState({ posts: res.data, ...this.state.posts }) )
}


addpost = (name, body, image) => {
  let post = {name, body, image};
  axios.post('/api/posts', { post })
    .then ( res => this.setState({posts:[res.data, ...this.state.posts]}))
    
}

  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Tweeter</Header>
        <PostForm  addpost = {this.addpost} />
        {this.state.posts.map( p => (
          <div>
            <Link to = {`/posts/${p.id}`}> {p.name}</Link>
            <h3>{p.body}</h3> 
            <h3>{p.image}</h3>
          </div>
        )
        )}
      </div>
    );
  }
}

export default Home;
