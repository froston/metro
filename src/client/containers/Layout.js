import React, { Component } from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'
import {
  Header,
  Footer,
  UserList,
  Home,
  Detail
} from '../components'

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/users' component={UserList} />
          <Route exact path='/users/:id' component={Detail} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default Layout
