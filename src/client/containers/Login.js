import React , { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { auth } from '../helpers'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      redirectToReferrer: false,
      username: '',
      password: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    auth.authenticate(this.state.username, this.state.password, () => {
      this.setState({ redirectToReferrer: true })
    })
  }

  handleChange = (key, value) => {
    this.setState({[key]: value})
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer, username, password } = this.state
    
    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }
    
    return (
      <form onSubmit={this.handleSubmit} noValidate>
        <p>You must log in to view the page at {from.pathname}</p>
        <input 
          type="text" 
          name="username" 
          value={username} 
          onChange={(ev) => this.handleChange('username', ev.target.value)}
        />
        <input 
          type="password" 
          name="password" 
          value={password} 
          onChange={(ev) => this.handleChange('password', ev.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Login;