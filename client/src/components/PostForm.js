import React from 'react';

class PostForm extends React.Component{
  state = { name: '', body: '', image: ''}

  

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {name, value} =e.target
    this.props.addpost(this.state.name, this.state.body, this.state.image)
    this.setState({[name]: value })
  }


  
  render () {

    return (
      <form onSubmit = {this.handleSubmit} >
      <input placeholder="Name"
      name = "name"
      required
      value = {this.state.name}
      onChange = {this.handleChange}
      />
      <input placeholder="body"
      name = "body"
      value = {this.state.body}
      onChange = {this.handleChange}
      />
      <input placeholder="image"
      name = "image"
      value = {this.state.image}
      onChange = {this.handleChange}
      />
      <button>
        submit
      </button>
      </form>
    )
    

  }
}

export default PostForm;