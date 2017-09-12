const authenticate = (name, password, callback) => {
  if (name === 'pavel' && password === 'pavel123') {
    localStorage.setItem('isAuthenticated', true)
  } else {
    localStorage.setItem('isAuthenticated', false)
  }
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