const authenticate = (name, password, callback) => {
  localStorage.setItem('token', btoa(name+':'+password))
  localStorage.setItem('isAuthenticated', true)
  callback()
}

const signout = (callback) => {
  localStorage.setItem('isAuthenticated', false)
  callback()
}

const isAuthenticated = () => {
  const isAuth = localStorage.getItem('isAuthenticated')
  return isAuth === 'true' || isAuth === true
}

export {
    authenticate,
    signout,
    isAuthenticated
}
