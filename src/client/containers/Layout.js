import React, { Component } from 'react'
import { 
  Switch, 
  Route, 
} from 'react-router-dom'
import { 
  Header, 
  Footer, 
  UserList,
  Home
} from '../components'

class Layout extends React.Component {
  render() {
    return <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/users' component={UserList} />
      </Switch>
      <Footer />
    </div>
  }
}

export default Layout