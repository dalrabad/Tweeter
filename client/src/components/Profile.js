import React, { Component } from 'react';
import { Header, Form, Button, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/auth';
import { setFlash } from '../actions/flash';
import BioForm from './BioForm'
import axios from 'axios'

class Profile extends Component{

  state = {bio:{} }

  componentDidMount() {
    
    axios.get('/api/bios')
      .then( res => this.setState({ bio: res.data }) )
  }
 

  addBio = (body) => {
    let bio = {body};
    axios.post('/api/bios', {bio })
      .then ( res => this.setState({bio: res.data}))
      
  }

  updateBio = (body) => {
    let bio = {body};
    axios.put(`/api/bios/${this.state.bio.id}`, {bio })
      .then ( res => this.setState({bio: res.data}))
      
  }
  
  
    render() {
      return (
        <div>
          <Header as='h1' textAlign='center'>Bio</Header>
          <BioForm
            addBio = {this.addBio} 
            updateBio = {this.updateBio}
            bio = {this.state.bio}
          />
          <h2> 
            { this.state.bio ? this.state.bio.body : 'No Bio Yet'} 
          </h2>
          
        </div>
      );
    }
  }
    


export default connect()(Profile);
