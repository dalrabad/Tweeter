import React from 'react'; 
import axios from 'axios'
import PostForm from './PostForm'

class Post extends React.Component{
  state = { post: {}}

  componentDidMount() {
  axios.get(`/api/posts/${this.props.match.params.id}`)
    .then( res => this.setState({ post: res.data}) )
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {name, value} =e.target
    this.props.Updatepost(this.state.name, this.state.body, this.state.image)
    this.setState({[name]: value })
  }

  updatepost = (name, body, image) => {
    let post = {name, body, image};
    axios.put(`/api/posts/${this.state.post.id}`, {post })
      .then ( res => this.setState({post: res.data}))
      
  }
  


  render () {
    let { post: { name, body, image }} = this.state;
      return (
        <div>
          <h1>{name}</h1>
          <h3>{body}</h3>
          <h3>{image}</h3>
          <PostForm 
            post = {this.state.post}
            updatepost = {this.updatepost}

          />
          
        </div>
      )
      
  
    }
  }
    
    export default Post;


