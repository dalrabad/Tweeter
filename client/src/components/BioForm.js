import React from 'react';

class BioForm extends React.Component{
  state = { body: ''}

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {name, value} =e.target
    this.props.bio ? this.props.updateBio(this.state.body) : this.props.addBio(this.state.body)
    this.setState({[name]: value })
  }


  
  render () {

    return (
      <form onSubmit = {this.handleSubmit} >
      <input placeholder="body"
      name = "body"
      required
      value = {this.state.body}
      onChange = {this.handleChange}
      />
      <button>
        Submit
      </button>
      </form>
    )
    

  }
}

export default BioForm;