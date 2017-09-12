const isAuthenticated = false;

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

const isAuthenticated = () => 
  localStorage.getItem('isAuthenticated') || false


export {
    authenticate,
    signout
}